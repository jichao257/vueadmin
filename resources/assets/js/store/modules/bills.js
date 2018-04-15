import * as types from '../mutation-types'

// state
export const state = {

        // 查询数据
        data: [{
            date: '2016-05-02',
            name: '王小',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小',
            address: '上海市普陀区金沙江路 1519 弄'
        }],

        // 自路由配置
        children: [
            {path: '/page/browse', text: '查看账单列表', icon: 'search'},
            {path: '/page/add', text: '添加账单', icon: 'plus'}
        ],

        // 面包屑配置
        breadcrumbName: {
            '/page': '账单管理',
            '/page/browse': '查看账单列表',
            '/page/add': '添加账单'
        },

        // 列表页（浏览页）配置
        browse: {

            // 列表页表格配置
            table: [
                {prop: 'date', label: '日期', width: 180},
                {prop: 'name', label: '姓名', width: 180},
                {prop: 'address', label: '地址', width: ''}
            ],

            // 展开表格配置
            expand: [
                {prop: 'date', label: '日期'},
                {prop: 'address', label: '地址'}
            ],

            // 表格右侧操作按钮配置
            buttons: [
                {method: 'destory', label: '删除'},
                {method: 'showEdit', label: '编辑'}
            ],

            // 搜索表单配置
            form: [
                {
                    pattern: 'input',
                    type: 'text',
                    label: '姓名',
                    name: 'name',
                    value: '',
                    placeholder: '请输入姓名',
                    rules: [
                        ]
                },
                {
                    pattern: 'input',
                    type: 'text',
                    label: '地址',
                    name: 'address',
                    value: '',
                    placeholder: '请输入地址',
                    rules: [
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
                }
            ]

        },

        // 添加页配置
        add: {

            // 搜索表单配置
            form: [
                {
                    type: 'hidden',
                    pattern: 'pri',
                    name: 'cid',
                    value: '',
                },
                {
                    type: 'label',
                    pattern: 'pri',
                    label: '姓名',
                    name: 'cid',
                    value: '',
                    text: '',
                    rules: [
                    ]
                },
                {
                    type: 'text',
                    label: '姓名',
                    name: 'date',
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
                    type: 'checkbox',
                    label: '爱好',
                    options: [
                        {value: 1, label: '篮球'},
                        {value: 2, label: '足球'},
                        {value: 3, label: '排球'},
                    ],
                    name: 'love',
                    value: [],
                    rules: [
                    ]
                },
                {
                    type: 'select',
                    label: '兴趣',
                    key: 'play',
                    name: 'like',
                    value: '',
                    placeholder: '请选择兴趣',
                    rules: [
                    ]
                },
                {
                    type: 'cascader',
                    label: '选择城市',
                    key: 'city',
                    name: 'city',
                    value: [],
                    placeholder: '请选择城市',
                    rules: [
                    ]
                },
                {
                    type: 'date',
                    label: '选择日期',
                    options: {
                        type: 'date',
                        picker: {
                            disabledDate(time) {
                                return time.getTime() < Date.now() - 8.64e7;
                            }
                        }
                    },
                    name: 'city',
                    value: '',
                    placeholder: '请选择日期',
                    rules: [
                    ]
                }
            ]

        },

        // 修改弹窗页配置
        update: {

            // 修改页弹窗标题
            title: '修改账单',

            // 搜索表单配置
            form: [
                {
                    pattern: 'input',
                    type: 'text',
                    label: '日期',
                    name: 'date',
                    value: '',
                    placeholder: '请输入日期',
                    rules: [
                        { required: true, message: '请输入日期', trigger: 'blur' },
                    ]
                },
                {
                    pattern: 'input',
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
                    pattern: 'input',
                    type: 'text',
                    label: '地址',
                    name: 'address',
                    value: '',
                    placeholder: '请输入地址',
                    rules: [
                        { required: true, message: '请输入地址', trigger: 'blur' },
                    ]
                }
            ]

        }
    };

export const getters = {};
export const mutations = {};
export const actions = {};

