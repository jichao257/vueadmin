<?php

namespace App\Http\Controllers;

use App\Http\Models\DataSchoolModel;
use App\Http\Models\DataSubjectModel;
use Illuminate\Http\Request;

class CacheController extends Controller
{
    /**
     * 获取缓存
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $schools = DataSchoolModel::get();
        $subjects = DataSubjectModel::get();

        $sch = [];
        foreach ($schools as $k => $v) {
            $sch[$k]['label'] = $v['name'];
            $sch[$k]['value'] = $v['id'];
        }

        $sub = [];
        foreach ($subjects as $k => $v) {
            $sub[$k]['label'] = $v['name'];
            $sub[$k]['value'] = $v['id'];
        }

        return response()->json(['formData'=>['schools'=>$sch, 'subjects'=>$sub]]);

    }

}
