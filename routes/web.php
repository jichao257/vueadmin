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

Route::get('/', function () {
    return view('welcome');
});

// 缓存处理
Route::get('/cache', 'CacheController@index');

// 数据处理
Route::resource('/client', 'ClientController');

// 爱好
Route::resource('/love', 'RelLoveController');


Route::resource('/myModule', 'MyModuleController');