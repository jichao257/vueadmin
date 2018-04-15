<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DataClientModel extends Model
{
    use SoftDeletes;

    // 定义一个表
    protected $table = 'data_client';

    // 主键
    protected $primaryKey = 'id';

    // 软删除
    protected $dates = ['deleted_at'];

    protected $guarded = ['id'];

    /**
     * 关联的爱好表
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function love()
    {
        return $this->hasOne('App\Http\Models\RelLoveModel', 'cid');
    }
}
