<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Url extends Model
{
    /*
    * TODO:
    * multiple forwards
    * neverending sessions
    * Adverts?
    * Open up an API?
    * Rate limiting?
    */

    protected $casts = [
        'id' => 'int',
        'redirects' => 'int',
    ];

    // check if url already exists by searching for whole url
    public static function urlExists($url = false)
    {
        if (false !== $url && strlen($url)) {
            return self::where('url', $url)->select('id')->first();
        }

        return false;
    }

    // save url in db
    public static function saveUrl($url = false)
    {
        if (false !== $url && strlen($url)) {
            $newUrl = new self();
            $newUrl->url = $url;
            $newUrl->ip = $_SERVER['REMOTE_ADDR'];
            $newUrl->save();

            return $newUrl;
        }

        return false;
    }

    // check if domain is banned
    public static function isBannedUrl($url)
    {
        $bannedUrls = array(
            $_SERVER['SERVER_NAME'],
            //'joke-domain.com',
        );
        $banned = array();
        foreach ($bannedUrls as $bannedUrl) {
            $banned[] = str_replace('.', '\.', $bannedUrl);
        }
        if (count($banned)) {
            $regex = '^(https?:\/\/)('.implode($banned, '|').')(.+)?$^';

            return preg_match($regex, $url);
        }

        return false;
    }

    // get the url from the db by id
    public static function getUrlById($id = false)
    {
        if (false !== $id) {
            return self::where('id', intval($id))->first();
        }

        return false;
    }
}
