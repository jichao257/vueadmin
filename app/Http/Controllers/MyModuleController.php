<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MyModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response()->json([
            'ServerTime' => time(),
            'ServerNo' => 'SN200',
            'ResultInfo' => '成功',
            'ResultData' => [
                'per_page' => 10,
                'total' => 5,
                'data' => [
                    ['id'=>1, 'name'=>'张三', 'school'=>'北京校区', 'sex'=>'男', 'subject'=>'PHP', 'idcard'=>'32232132', 'province'=>'北京', 'city'=>'昌平区'],
                    ['id'=>2, 'name'=>'李四', 'school'=>'上海校区', 'sex'=>'女', 'subject'=>'UI', 'idcard'=>'432423434', 'province'=>'河北', 'city'=>'廊坊'],
                    ['id'=>3, 'name'=>'王五', 'school'=>'北京校区', 'sex'=>'女', 'subject'=>'H5', 'idcard'=>'42342343', 'province'=>'北京', 'city'=>'朝阳区'],
                    ['id'=>4, 'name'=>'赵六', 'school'=>'沈阳校区', 'sex'=>'男', 'subject'=>'JAVA', 'idcard'=>'54354354', 'province'=>'河北', 'city'=>'霸州'],
                    ['id'=>5, 'name'=>'陈七', 'school'=>'北京校区', 'sex'=>'男', 'subject'=>'PHP', 'idcard'=>'12324424', 'province'=>'北京', 'city'=>'昌平区'],
                ],
            ],
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $schools = [
            1=>'北京校区',
            2=>'上海校区',
            3=>'广州校区',
            4=>'沈阳校区',
        ];
        $subjects = [
            1=>'PHP',
            2=>'UI',
            3=>'H5',
            4=>'JAVA',
        ];
        $sex = ['1' => '男', '2' => '女'];
        $city = [
            '1' => '北京',
            '2' => '河北',
            '10' => '昌平',
            '11' => '朝阳区',
            '12' => '廊坊',
            '13' => '霸州',
        ];

        $data['id'] = random_int(6, 9999999);
        $data['school'] = $schools[$data['school']];
        $data['subject'] = $subjects[$data['subject']];
        $data['sex'] = $sex[$data['sex']];
        $data['province'] = $city[$data['province']];
        $data['city'] = $city[$data['city']];

        return response()->json([
            'ServerTime' => time(),
            'ServerNo' => 'SN200',
            'ResultInfo' => '成功',
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
        $arr = [
            ['id'=>1, 'name'=>'张三', 'school'=>1, 'sex'=>1, 'subject'=>1, 'idcard'=>'32232132', 'province'=>1, 'city'=>10],
            ['id'=>2, 'name'=>'李四', 'school'=>2, 'sex'=>2, 'subject'=>2, 'idcard'=>'432423434', 'province'=>2, 'city'=>12],
            ['id'=>3, 'name'=>'王五', 'school'=>1, 'sex'=>2, 'subject'=>3, 'idcard'=>'42342343', 'province'=>1, 'city'=>11],
            ['id'=>4, 'name'=>'赵六', 'school'=>4, 'sex'=>1, 'subject'=>4, 'idcard'=>'54354354', 'province'=>2, 'city'=>13],
            ['id'=>5, 'name'=>'陈七', 'school'=>1, 'sex'=>1, 'subject'=>1, 'idcard'=>'12324424', 'province'=>1, 'city'=>10],
        ];

        $res = array_values(array_where($arr, function ($value, $key) use ($id) {
            return $value['id'] == $id;
        }))[0];

        $p = $res['province'];
        $c = $res['city'];
        $res['city'] = [];
        $res['city'][] = $p;
        $res['city'][] = $c;

        return response()->json([
            'ServerTime' => time(),
            'ServerNo' => 'SN200',
            'ResultInfo' => '成功',
            'ResultData' => $res,
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

        $schools = [
            1=>'北京校区',
            2=>'上海校区',
            3=>'广州校区',
            4=>'沈阳校区',
        ];
        $subjects = [
            1=>'PHP',
            2=>'UI',
            3=>'H5',
            4=>'JAVA',
        ];
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
            'ServerTime' => time(),
            'ServerNo' => 'SN200',
            'ResultInfo' => '成功',
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
        return response()->json([
            'ServerTime' => time(),
            'ServerNo' => 'SN200',
            'ResultInfo' => '成功',
            'ResultData' => [],
        ]);
    }
}
