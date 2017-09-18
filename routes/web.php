<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['as' => 'home', 'uses' => 'UrlController@home']);

Route::post('shorten', 'UrlController@getUrl');

Route::get('{token}', 'UrlController@forward')->where('token', '[0-9A-Za-z]+');
