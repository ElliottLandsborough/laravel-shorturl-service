<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use App\Url;
use App\Http\Requests\ShortenUrlRequest;
use Elliottlan\LaravelBaser\Facades\Baser;

class UrlController extends Controller
{
    // display home page
    public function home()
    {
        return view('home');
    }

    // get get a short URL
    public function getUrl(ShortenUrlRequest $request)
    {
        // if the url is already in db
        if ($url = Url::urlExists($request->url)) {
            // get the id
            $id = $url->id;
        } elseif (!Url::isBannedUrl($request->url)) {
            // insert and return id
            $id = Url::saveUrl($request->url)->id;
        }
        if (isset($id)) {
            // generate token from id
            return response()->json(['token' => Baser::getTokenFromInt($id)]);
        }
    }

    // forward the user to their place
    public function forward($token)
    {
        $url = Url::getUrlById(Baser::getIntFromToken($token));
        if ($url) {
            ++$url->redirects;
            $url->save();

            return redirect($url->url, 301);
        } else {
            return redirect(route('home'));
        }
    }
}
