import * as types from '../mutation-types'

export const state = {

    config: {

        // 此 module 可能请求的路由
        route: {
            'default': '/myModule',
        },

        pri: 'id',
        text: 'name',
    },

    // 路由默认页声明
    notices: [
        '这',
        '是我',
        '创建的',
        '第一个 module',
    ],

    // 路由配置
    children: [
        {path: '/page/browse', option: 'myOption1', text: '浏览页', icon: 'search'},
        {path: '/page/add', option: 'myOption2', text: '添加学生', icon: 'plus'},
    ],

    // 面包屑配置
    breadcrumbName: {
        '/page': '学生管理',
        '/page/browse': '浏览页',
        '/page/add': '添加学生',
    },

    // 列表页（浏览页）配置
    myOption1: {

        browse: {

            // 列表页表格配置
            table: [
                {prop: 'name', label: '姓名', width: ''},
                {prop: 'sex', label: '性别', width: ''},
                {prop: 'school', label: '校区', width: ''},
                {prop: 'subject', label: '学科', width: ''},
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
            ],

            // 搜索表单配置
            form: [
                {
                    type: 'text',
                    label: '姓名',
                    name: 'name',
                    value: '',
                    placeholder: '请输入姓名',
                },
                {
                    type: 'select',
                    label: '校区',
                    key: 'schools',
                    name: 'school',
                    value: '',
                    placeholder: '请输入地址',
                },
            ]
        },

        // 修改弹窗页配置
        update: {

            // 修改页弹窗标题
            title: '修改学生信息',

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
    },

    // 添加学生配置
    myOption2: {

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
}