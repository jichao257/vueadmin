<?php

namespace App\Http\Services;

class ActionService
{
    protected $alias = [];

    public function __construct()
    {
        $this->alias = config('finance.alias');
    }

    protected function getModel ($alia) {
        return resolve($this->alias[$alia]);
    }

    public function store ($data) {

    }
}