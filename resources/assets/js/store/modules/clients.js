import * as types from '../mutation-types'

// state
export const state = {
    config: {
        route: {
            'default': '/client',
            'love': '/love',
        },
        pri: 'id',
        text: 'name',
    },

    notices: [
        '在这里',
        '我准备',
        '放上一些',
        '应用的操作提示、通知等',
    ],

    // 自路由配置
    children: [
        {path: '/page/browse', option: 'browse', text: '查看学生列表', icon: 'search'},
        {path: '/page/add', option: 'add', text: '添加学生', icon: 'plus'},
    ],

    // 面包屑配置
    breadcrumbName: {
        '/page': '学生管理',
        '/page/browse': '查看学生列表',
        '/page/add': '添加学生',
    },

    // 列表页（浏览页）配置
    browse: {

        browse: {

            // 列表页表格配置
            table: [
                {prop: 'name', label: '姓名', width: ''},
                {prop: 'sex', label: '性别', width: ''},
                {prop: 'idcard', label: '身份证', width: ''},
                {prop: 'school', label: '校区', width: ''},
                {prop: 'subject', label: '学科', width: ''},
                {prop: 'province', label: '所属省', width: ''},
                {prop: 'city', label: '所属市', width: ''},
            ],

            // 初始化分页数据
            page: {
                size: 15,
                total: 0
            },

            // 展开表格配置
            expand: [
                {prop: 'name', label: '姓名'},
                {prop: 'sex', label: '性别'},
                {prop: 'idcard', label: '身份证'},
                {prop: 'school', label: '校区'},
                {prop: 'subject', label: '学科'},
                {prop: 'province', label: '所属省'},
                {prop: 'city', label: '所属市'},
            ],

            // 表格右侧操作按钮配置
            buttons: [
                {method: {type: 'emit', do: 'destory'}, label: '删除'},
                {method: {type: 'local', do: 'showEdit', editOption: 'update'}, label: '编辑'},
                {method: {type: 'local', do: 'showEdit', editOption: 'edit'}, label: '编辑爱好'},
                {method: {type: 'route', do: '/page/add', option: 'addLove', emit: 'route_init'}, label: '添加爱好'}
            ],

            // 搜索表单配置
            form: [
                {
                    type: 'text',
                    label: '姓名',
                    name: 'name',
                    value: '',
                    placeholder: '请输入姓名',
                    rules: [
                    ]
                },
                {
                    type: 'select',
                    label: '校区',
                    key: 'schools',
                    name: 'school',
                    value: '',
                    placeholder: '请输入地址',
                    rules: [
                    ]
                },
            ]
        },

        // 修改弹窗页配置
        update: {

            // 修改页弹窗标题
            title: '修改班期',

            // 修改表单配置
            form: [
                {
                    type: 'text',
                    label: '姓名',
                    name: 'name',
                    value: '',
                    placeholder: '请输入姓名',
                    rules: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                    ]
                },
                {
                    type: 'radio',
                    options: [
                        {value: 1, label: '男'},
                        {value: 2, label: '女'},
                    ],
                    label: '性别',
                    name: 'sex',
                    value: 1,
                    rules: [
                    ]
                },
                {
                    type: 'text',
                    label: '身份证号',
                    name: 'idcard',
                    value: '',
                    placeholder: '请输入身份证号',
                    rules: [
                        { required: true, message: '请输入身份证号', trigger: 'blur' },
                    ]
                },
                {
                    type: 'select',
                    label: '校区',
                    key: 'schools',
                    name: 'school',
                    value: '',
                    placeholder: '请选择校区',
                    rules: [
                        { type: 'number', required: true, message: '请选择校区', trigger: 'change' },
                    ]
                },
                {
                    type: 'select',
                    label: '学科',
                    key: 'subjects',
                    name: 'subject',
                    value: '',
                    placeholder: '请选择学科',
                    rules: [
                        { type: 'number', required: true, message: '请选择学科', trigger: 'change' },
                    ]
                },
                {
                    type: 'cascader',
                    label: '选择城市',
                    key: 'city',
                    name: 'city',
                    valueKey: ['province', 'city'],
                    value: [],
                    placeholder: '请选择城市',
                    rules: [
                        { type: 'array', required: true, message: '请选择城市', trigger: 'change' },
                    ]
                },
            ]

        },

        // 修改弹窗页配置
        edit: {

            // 访问的路由
            route: 'love',

            // 修改页弹窗标题
            title: '修改爱好',

            // 修改表单配置
            form: [
                {
                    type: 'hidden',
                    name: 'id',
                    value: '',
                },
                {
                    type: 'select',
                    label: '爱好',
                    name: 'love',
                    options: [
                        {
                            value: 1,
                            label: '足球'
                        },{
                            value: 2,
                            label: '篮球'
                        },{
                            value: 3,
                            label: '排球'
                        },{
                            value: 4,
                            label: '游泳'
                        },
                    ],
                    value: '',
                    placeholder: '请选择爱好',
                    rules: [
                        { type:'number', required: true, message: '请选择爱好', trigger: 'change' },
                    ]
                },
                {
                    type: 'textarea',
                    label: '备注',
                    name: 'remark',
                    value: '',
                    rules: [
                        { required: true, message: '请输入备注', trigger: 'blur' },
                    ]
                },
            ]

        }

    },

    // 添加学生配置
    add: {

        // 搜索表单配置
        form: [
            {
                type: 'text',
                label: '姓名',
                name: 'name',
                value: '',
                placeholder: '请输入姓名',
                rules: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ]
            },
            {
                type: 'radio',
                options: [
                    {value: 1, label: '男'},
                    {value: 2, label: '女'},
                ],
                label: '性别',
                name: 'sex',
                value: 1,
                rules: [
                ]
            },
            {
                type: 'text',
                label: '身份证号',
                name: 'idcard',
                value: '',
                placeholder: '请输入身份证号',
                rules: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' },
                ]
            },
            {
                type: 'select',
                label: '校区',
                key: 'schools',
                name: 'school',
                value: '',
                placeholder: '请选择校区',
                rules: [
                    { type: 'number', required: true, message: '请选择校区', trigger: 'change' },
                ]
            },
            {
                type: 'select',
                label: '学科',
                key: 'subjects',
                name: 'subject',
                value: '',
                placeholder: '请选择学科',
                rules: [
                    { type: 'number', required: true, message: '请选择学科', trigger: 'change' },
                ]
            },
            {
                type: 'cascader',
                label: '选择城市',
                key: 'city',
                name: 'city',
                valueKey: ['province', 'city'],
                value: [],
                placeholder: '请选择城市',
                rules: [
                    { type: 'array', required: true, message: '请选择学科', trigger: 'change' },
                ]
            },
        ]

    },

    // 添加页配置
    addLove: {

        route: 'love',

        // 搜索表单配置
        form: [
            {
                type: 'label',
                pattern: 'key',
                label: '姓名',
                name: 'cid',
                value: '',
                text: '',
                rules: [
                ]
            },
            {
                type: 'select',
                label: '爱好',
                name: 'love',
                options: [
                    {
                        value: 1,
                        label: '足球'
                    },{
                        value: 2,
                        label: '篮球'
                    },{
                        value: 3,
                        label: '排球'
                    },{
                        value: 4,
                        label: '游泳'
                    },
                ],
                value: '',
                placeholder: '请选择爱好',
                rules: [
                    { type:'number', required: true, message: '请选择爱好', trigger: 'change' },
                ]
            },
            {
                type: 'textarea',
                label: '备注',
                name: 'remark',
                value: '',
                rules: [
                    { required: true, message: '请输入备注', trigger: 'blur' },
                ]
            },

        ]

    },

};

export const getters = {};
export const mutations = {};
export const actions = {};

