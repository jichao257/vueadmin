<?php

namespace App\Http\Controllers;

use App\Http\Models\DataClientModel;
use App\Http\Models\DataSchoolModel;
use App\Http\Models\DataSubjectModel;
use App\Http\Models\RelLoveModel;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $where = $request->all();
        unset($where['page']);

        $page = DataClientModel::where($where)->paginate(5)->toArray();
        $data = $page['data'];

        $schools = DataSchoolModel::all()->pluck('name', 'id');
        $subjects = DataSubjectModel::all()->pluck('name', 'id');
        $sex = ['1' => '男', '2' => '女'];
        $city = [
            '1' => '北京',
            '2' => '河北',
            '10' => '昌平',
            '11' => '朝阳区',
            '12' => '廊坊',
            '13' => '霸州',
        ];

        foreach ($data as $k => $v) {
            $data[$k]['school'] = $schools[$v['school']];
            $data[$k]['subject'] = $subjects[$v['subject']];
            $data[$k]['sex'] = $sex[$v['sex']];
            $data[$k]['province'] = $city[$v['province']];
            $data[$k]['city'] = $city[$v['city']];
        }

        $page['data'] = $data;
        return response()->json([
            'ServerNo' => 'SN200',
            'ResultData' => $page,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * 添加数据
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = DataClientModel::create($request->all());

        $schools = DataSchoolModel::all()->pluck('name', 'id');
        $subjects = DataSubjectModel::all()->pluck('name', 'id');
        $sex = ['1' => '男', '2' => '女'];
        $city = [
            '1' => '北京',
            '2' => '河北',
            '10' => '昌平',
            '11' => '朝阳区',
            '12' => '廊坊',
            '13' => '霸州',
        ];

        $data['school'] = $schools[$data['school']];
        $data['subject'] = $subjects[$data['subject']];
        $data['sex'] = $sex[$data['sex']];
        $data['province'] = $city[$data['province']];
        $data['city'] = $city[$data['city']];

        return response()->json([
            'ServerNo' => 'SN200',
            'ResultData' => $data,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $client = DataClientModel::find($id)->toArray();
        $p = $client['province'];
        $c = $client['city'];
        $client['city'] = [];
        $client['city'][] = $p;
        $client['city'][] = $c;

        return response()->json([
            'ServerNo' => 'SN200',
            'ResultData' => $client,
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        DataClientModel::where('id', $id)->update($data);

        $schools = DataSchoolModel::all()->pluck('name', 'id');
        $subjects = DataSubjectModel::all()->pluck('name', 'id');
        $sex = ['1' => '男', '2' => '女'];
        $city = [
            '1' => '北京',
            '2' => '河北',
            '10' => '昌平',
            '11' => '朝阳区',
            '12' => '廊坊',
            '13' => '霸州',
        ];

        $data['id'] = $id;
        $data['school'] = $schools[$data['school']];
        $data['subject'] = $subjects[$data['subject']];
        $data['sex'] = $sex[$data['sex']];
        $data['province'] = $city[$data['province']];
        $data['city'] = $city[$data['city']];

        return response()->json([
            'ServerNo' => 'SN200',
            'ResultData' => $data,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DataClientModel::where('id', $id)->delete();
        RelLoveModel::where('cid', $id)->delete();
        return response()->json([
            'ServerNo' => 'SN200',
            'ResultData' => [],
        ]);
    }
}
