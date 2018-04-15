<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RelLoveModel extends Model
{
    use SoftDeletes;

    // 定义一个表
    protected $table = 'rel_love';

    //主键
    protected $primaryKey = 'id';

    // 软删除
    protected $dates = ['deleted_at'];

    protected $guarded = ['id'];


}
