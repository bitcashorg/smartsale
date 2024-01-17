export default {
    "scalars": [
        0,
        7,
        17,
        25,
        39,
        50,
        62,
        84,
        95,
        107,
        115,
        125,
        133,
        142,
        150,
        154,
        156,
        157,
        158,
        164,
        172,
        176,
        185,
        195,
        203,
        211,
        215,
        217,
        219,
        229,
        240,
        241,
        242,
        254,
        280,
        291,
        303,
        311,
        323,
        339,
        347,
        351,
        353,
        361,
        372,
        384,
        396,
        409,
        417,
        421,
        427,
        435,
        439,
        445,
        454,
        458,
        470,
        471
    ],
    "types": {
        "Boolean": {},
        "BooleanComparisonExp": {
            "_eq": [
                0
            ],
            "_gt": [
                0
            ],
            "_gte": [
                0
            ],
            "_in": [
                0
            ],
            "_isNull": [
                0
            ],
            "_lt": [
                0
            ],
            "_lte": [
                0
            ],
            "_neq": [
                0
            ],
            "_nin": [
                0
            ],
            "__typename": [
                361
            ]
        },
        "Category": {
            "categoryId": [
                158
            ],
            "chatbots": [
                75,
                {
                    "distinctOn": [
                        95,
                        "[ChatbotCategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        93,
                        "[ChatbotCategoryOrderBy!]"
                    ],
                    "where": [
                        83
                    ]
                }
            ],
            "chatbotsAggregate": [
                76,
                {
                    "distinctOn": [
                        95,
                        "[ChatbotCategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        93,
                        "[ChatbotCategoryOrderBy!]"
                    ],
                    "where": [
                        83
                    ]
                }
            ],
            "name": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "CategoryAggregate": {
            "aggregate": [
                4
            ],
            "nodes": [
                2
            ],
            "__typename": [
                361
            ]
        },
        "CategoryAggregateFields": {
            "avg": [
                5
            ],
            "count": [
                158,
                {
                    "columns": [
                        17,
                        "[CategorySelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                10
            ],
            "min": [
                11
            ],
            "stddev": [
                19
            ],
            "stddevPop": [
                20
            ],
            "stddevSamp": [
                21
            ],
            "sum": [
                24
            ],
            "varPop": [
                27
            ],
            "varSamp": [
                28
            ],
            "variance": [
                29
            ],
            "__typename": [
                361
            ]
        },
        "CategoryAvgFields": {
            "categoryId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "CategoryBoolExp": {
            "_and": [
                6
            ],
            "_not": [
                6
            ],
            "_or": [
                6
            ],
            "categoryId": [
                159
            ],
            "chatbots": [
                83
            ],
            "chatbotsAggregate": [
                77
            ],
            "name": [
                362
            ],
            "__typename": [
                361
            ]
        },
        "CategoryConstraint": {},
        "CategoryIncInput": {
            "categoryId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "CategoryInsertInput": {
            "categoryId": [
                158
            ],
            "chatbots": [
                80
            ],
            "name": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "CategoryMaxFields": {
            "categoryId": [
                158
            ],
            "name": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "CategoryMinFields": {
            "categoryId": [
                158
            ],
            "name": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "CategoryMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                2
            ],
            "__typename": [
                361
            ]
        },
        "CategoryObjRelInsertInput": {
            "data": [
                9
            ],
            "onConflict": [
                14
            ],
            "__typename": [
                361
            ]
        },
        "CategoryOnConflict": {
            "constraint": [
                7
            ],
            "updateColumns": [
                25
            ],
            "where": [
                6
            ],
            "__typename": [
                361
            ]
        },
        "CategoryOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotsAggregate": [
                79
            ],
            "name": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "CategoryPkColumnsInput": {
            "categoryId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "CategorySelectColumn": {},
        "CategorySetInput": {
            "categoryId": [
                158
            ],
            "name": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "CategoryStddevFields": {
            "categoryId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "CategoryStddevPopFields": {
            "categoryId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "CategoryStddevSampFields": {
            "categoryId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "CategoryStreamCursorInput": {
            "initialValue": [
                23
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "CategoryStreamCursorValueInput": {
            "categoryId": [
                158
            ],
            "name": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "CategorySumFields": {
            "categoryId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "CategoryUpdateColumn": {},
        "CategoryUpdates": {
            "_inc": [
                8
            ],
            "_set": [
                18
            ],
            "where": [
                6
            ],
            "__typename": [
                361
            ]
        },
        "CategoryVarPopFields": {
            "categoryId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "CategoryVarSampFields": {
            "categoryId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "CategoryVarianceFields": {
            "categoryId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "Chat": {
            "addedBy": [
                471
            ],
            "chatId": [
                158
            ],
            "chatbot": [
                70
            ],
            "chatbotId": [
                158
            ],
            "conversationLink": [
                361
            ],
            "user": [
                441
            ],
            "__typename": [
                361
            ]
        },
        "ChatAggregate": {
            "aggregate": [
                33
            ],
            "nodes": [
                30
            ],
            "__typename": [
                361
            ]
        },
        "ChatAggregateBoolExp": {
            "count": [
                461
            ],
            "__typename": [
                361
            ]
        },
        "ChatAggregateFields": {
            "avg": [
                36
            ],
            "count": [
                158,
                {
                    "columns": [
                        50,
                        "[ChatSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                42
            ],
            "min": [
                44
            ],
            "stddev": [
                52
            ],
            "stddevPop": [
                54
            ],
            "stddevSamp": [
                56
            ],
            "sum": [
                60
            ],
            "varPop": [
                64
            ],
            "varSamp": [
                66
            ],
            "variance": [
                68
            ],
            "__typename": [
                361
            ]
        },
        "ChatAggregateOrderBy": {
            "avg": [
                37
            ],
            "count": [
                219
            ],
            "max": [
                43
            ],
            "min": [
                45
            ],
            "stddev": [
                53
            ],
            "stddevPop": [
                55
            ],
            "stddevSamp": [
                57
            ],
            "sum": [
                61
            ],
            "varPop": [
                65
            ],
            "varSamp": [
                67
            ],
            "variance": [
                69
            ],
            "__typename": [
                361
            ]
        },
        "ChatArrRelInsertInput": {
            "data": [
                41
            ],
            "onConflict": [
                47
            ],
            "__typename": [
                361
            ]
        },
        "ChatAvgFields": {
            "chatId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatAvgOrderBy": {
            "chatId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatBoolExp": {
            "_and": [
                38
            ],
            "_not": [
                38
            ],
            "_or": [
                38
            ],
            "addedBy": [
                460
            ],
            "chatId": [
                159
            ],
            "chatbot": [
                74
            ],
            "chatbotId": [
                159
            ],
            "conversationLink": [
                362
            ],
            "user": [
                444
            ],
            "__typename": [
                361
            ]
        },
        "ChatConstraint": {},
        "ChatIncInput": {
            "chatId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatInsertInput": {
            "addedBy": [
                471
            ],
            "chatId": [
                158
            ],
            "chatbot": [
                121
            ],
            "chatbotId": [
                158
            ],
            "conversationLink": [
                361
            ],
            "user": [
                450
            ],
            "__typename": [
                361
            ]
        },
        "ChatMaxFields": {
            "addedBy": [
                471
            ],
            "chatId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "conversationLink": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ChatMaxOrderBy": {
            "addedBy": [
                219
            ],
            "chatId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "conversationLink": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatMinFields": {
            "addedBy": [
                471
            ],
            "chatId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "conversationLink": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ChatMinOrderBy": {
            "addedBy": [
                219
            ],
            "chatId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "conversationLink": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                30
            ],
            "__typename": [
                361
            ]
        },
        "ChatOnConflict": {
            "constraint": [
                39
            ],
            "updateColumns": [
                62
            ],
            "where": [
                38
            ],
            "__typename": [
                361
            ]
        },
        "ChatOrderBy": {
            "addedBy": [
                219
            ],
            "chatId": [
                219
            ],
            "chatbot": [
                123
            ],
            "chatbotId": [
                219
            ],
            "conversationLink": [
                219
            ],
            "user": [
                452
            ],
            "__typename": [
                361
            ]
        },
        "ChatPkColumnsInput": {
            "chatId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatSelectColumn": {},
        "ChatSetInput": {
            "addedBy": [
                471
            ],
            "chatId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "conversationLink": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ChatStddevFields": {
            "chatId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatStddevOrderBy": {
            "chatId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatStddevPopFields": {
            "chatId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatStddevPopOrderBy": {
            "chatId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatStddevSampFields": {
            "chatId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatStddevSampOrderBy": {
            "chatId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatStreamCursorInput": {
            "initialValue": [
                59
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "ChatStreamCursorValueInput": {
            "addedBy": [
                471
            ],
            "chatId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "conversationLink": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ChatSumFields": {
            "chatId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatSumOrderBy": {
            "chatId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatUpdateColumn": {},
        "ChatUpdates": {
            "_inc": [
                40
            ],
            "_set": [
                51
            ],
            "where": [
                38
            ],
            "__typename": [
                361
            ]
        },
        "ChatVarPopFields": {
            "chatId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatVarPopOrderBy": {
            "chatId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatVarSampFields": {
            "chatId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatVarSampOrderBy": {
            "chatId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatVarianceFields": {
            "chatId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatVarianceOrderBy": {
            "chatId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "Chatbot": {
            "avatar": [
                361
            ],
            "categories": [
                75,
                {
                    "distinctOn": [
                        95,
                        "[ChatbotCategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        93,
                        "[ChatbotCategoryOrderBy!]"
                    ],
                    "where": [
                        83
                    ]
                }
            ],
            "categoriesAggregate": [
                76,
                {
                    "distinctOn": [
                        95,
                        "[ChatbotCategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        93,
                        "[ChatbotCategoryOrderBy!]"
                    ],
                    "where": [
                        83
                    ]
                }
            ],
            "chatbotId": [
                158
            ],
            "chats": [
                30,
                {
                    "distinctOn": [
                        50,
                        "[ChatSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        48,
                        "[ChatOrderBy!]"
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "chatsAggregate": [
                31,
                {
                    "distinctOn": [
                        50,
                        "[ChatSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        48,
                        "[ChatOrderBy!]"
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "createdBy": [
                361
            ],
            "defaultComplexity": [
                361
            ],
            "defaultLength": [
                361
            ],
            "defaultTone": [
                361
            ],
            "defaultType": [
                361
            ],
            "description": [
                361
            ],
            "name": [
                361
            ],
            "preferences": [
                220,
                {
                    "distinctOn": [
                        240,
                        "[PreferenceSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        238,
                        "[PreferenceOrderBy!]"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "preferencesAggregate": [
                221,
                {
                    "distinctOn": [
                        240,
                        "[PreferenceSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        238,
                        "[PreferenceOrderBy!]"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "prompts": [
                271,
                {
                    "distinctOn": [
                        291,
                        "[PromptChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        289,
                        "[PromptChatbotOrderBy!]"
                    ],
                    "where": [
                        279
                    ]
                }
            ],
            "promptsAggregate": [
                272,
                {
                    "distinctOn": [
                        291,
                        "[PromptChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        289,
                        "[PromptChatbotOrderBy!]"
                    ],
                    "where": [
                        279
                    ]
                }
            ],
            "threads": [
                363,
                {
                    "distinctOn": [
                        384,
                        "[ThreadSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        382,
                        "[ThreadOrderBy!]"
                    ],
                    "where": [
                        371
                    ]
                }
            ],
            "threadsAggregate": [
                364,
                {
                    "distinctOn": [
                        384,
                        "[ThreadSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        382,
                        "[ThreadOrderBy!]"
                    ],
                    "where": [
                        371
                    ]
                }
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotAggregate": {
            "aggregate": [
                72
            ],
            "nodes": [
                70
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotAggregateFields": {
            "avg": [
                73
            ],
            "count": [
                158,
                {
                    "columns": [
                        125,
                        "[ChatbotSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                118
            ],
            "min": [
                119
            ],
            "stddev": [
                127
            ],
            "stddevPop": [
                128
            ],
            "stddevSamp": [
                129
            ],
            "sum": [
                132
            ],
            "varPop": [
                135
            ],
            "varSamp": [
                136
            ],
            "variance": [
                137
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotAvgFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotBoolExp": {
            "_and": [
                74
            ],
            "_not": [
                74
            ],
            "_or": [
                74
            ],
            "avatar": [
                362
            ],
            "categories": [
                83
            ],
            "categoriesAggregate": [
                77
            ],
            "chatbotId": [
                159
            ],
            "chats": [
                38
            ],
            "chatsAggregate": [
                32
            ],
            "createdBy": [
                362
            ],
            "defaultComplexity": [
                362
            ],
            "defaultLength": [
                362
            ],
            "defaultTone": [
                362
            ],
            "defaultType": [
                362
            ],
            "description": [
                362
            ],
            "name": [
                362
            ],
            "preferences": [
                228
            ],
            "preferencesAggregate": [
                222
            ],
            "prompts": [
                279
            ],
            "promptsAggregate": [
                273
            ],
            "threads": [
                371
            ],
            "threadsAggregate": [
                365
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategory": {
            "category": [
                2
            ],
            "categoryId": [
                158
            ],
            "chatbot": [
                70
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryAggregate": {
            "aggregate": [
                78
            ],
            "nodes": [
                75
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryAggregateBoolExp": {
            "count": [
                462
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryAggregateFields": {
            "avg": [
                81
            ],
            "count": [
                158,
                {
                    "columns": [
                        95,
                        "[ChatbotCategorySelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                87
            ],
            "min": [
                89
            ],
            "stddev": [
                97
            ],
            "stddevPop": [
                99
            ],
            "stddevSamp": [
                101
            ],
            "sum": [
                105
            ],
            "varPop": [
                109
            ],
            "varSamp": [
                111
            ],
            "variance": [
                113
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryAggregateOrderBy": {
            "avg": [
                82
            ],
            "count": [
                219
            ],
            "max": [
                88
            ],
            "min": [
                90
            ],
            "stddev": [
                98
            ],
            "stddevPop": [
                100
            ],
            "stddevSamp": [
                102
            ],
            "sum": [
                106
            ],
            "varPop": [
                110
            ],
            "varSamp": [
                112
            ],
            "variance": [
                114
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryArrRelInsertInput": {
            "data": [
                86
            ],
            "onConflict": [
                92
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryAvgFields": {
            "categoryId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryAvgOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryBoolExp": {
            "_and": [
                83
            ],
            "_not": [
                83
            ],
            "_or": [
                83
            ],
            "category": [
                6
            ],
            "categoryId": [
                159
            ],
            "chatbot": [
                74
            ],
            "chatbotId": [
                159
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryConstraint": {},
        "ChatbotCategoryIncInput": {
            "categoryId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryInsertInput": {
            "category": [
                13
            ],
            "categoryId": [
                158
            ],
            "chatbot": [
                121
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryMaxFields": {
            "categoryId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryMaxOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryMinFields": {
            "categoryId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryMinOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                75
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryOnConflict": {
            "constraint": [
                84
            ],
            "updateColumns": [
                107
            ],
            "where": [
                83
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryOrderBy": {
            "category": [
                15
            ],
            "categoryId": [
                219
            ],
            "chatbot": [
                123
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryPkColumnsInput": {
            "categoryId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategorySelectColumn": {},
        "ChatbotCategorySetInput": {
            "categoryId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryStddevFields": {
            "categoryId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryStddevOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryStddevPopFields": {
            "categoryId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryStddevPopOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryStddevSampFields": {
            "categoryId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryStddevSampOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryStreamCursorInput": {
            "initialValue": [
                104
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryStreamCursorValueInput": {
            "categoryId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategorySumFields": {
            "categoryId": [
                158
            ],
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategorySumOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryUpdateColumn": {},
        "ChatbotCategoryUpdates": {
            "_inc": [
                85
            ],
            "_set": [
                96
            ],
            "where": [
                83
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryVarPopFields": {
            "categoryId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryVarPopOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryVarSampFields": {
            "categoryId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryVarSampOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryVarianceFields": {
            "categoryId": [
                157
            ],
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotCategoryVarianceOrderBy": {
            "categoryId": [
                219
            ],
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotConstraint": {},
        "ChatbotIncInput": {
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotInsertInput": {
            "avatar": [
                361
            ],
            "categories": [
                80
            ],
            "chatbotId": [
                158
            ],
            "chats": [
                35
            ],
            "createdBy": [
                361
            ],
            "defaultComplexity": [
                361
            ],
            "defaultLength": [
                361
            ],
            "defaultTone": [
                361
            ],
            "defaultType": [
                361
            ],
            "description": [
                361
            ],
            "name": [
                361
            ],
            "preferences": [
                225
            ],
            "prompts": [
                276
            ],
            "threads": [
                368
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotMaxFields": {
            "avatar": [
                361
            ],
            "chatbotId": [
                158
            ],
            "createdBy": [
                361
            ],
            "defaultComplexity": [
                361
            ],
            "defaultLength": [
                361
            ],
            "defaultTone": [
                361
            ],
            "defaultType": [
                361
            ],
            "description": [
                361
            ],
            "name": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotMinFields": {
            "avatar": [
                361
            ],
            "chatbotId": [
                158
            ],
            "createdBy": [
                361
            ],
            "defaultComplexity": [
                361
            ],
            "defaultLength": [
                361
            ],
            "defaultTone": [
                361
            ],
            "defaultType": [
                361
            ],
            "description": [
                361
            ],
            "name": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                70
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotObjRelInsertInput": {
            "data": [
                117
            ],
            "onConflict": [
                122
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotOnConflict": {
            "constraint": [
                115
            ],
            "updateColumns": [
                133
            ],
            "where": [
                74
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotOrderBy": {
            "avatar": [
                219
            ],
            "categoriesAggregate": [
                79
            ],
            "chatbotId": [
                219
            ],
            "chatsAggregate": [
                34
            ],
            "createdBy": [
                219
            ],
            "defaultComplexity": [
                219
            ],
            "defaultLength": [
                219
            ],
            "defaultTone": [
                219
            ],
            "defaultType": [
                219
            ],
            "description": [
                219
            ],
            "name": [
                219
            ],
            "preferencesAggregate": [
                224
            ],
            "promptsAggregate": [
                275
            ],
            "threadsAggregate": [
                367
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotPkColumnsInput": {
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotSelectColumn": {},
        "ChatbotSetInput": {
            "avatar": [
                361
            ],
            "chatbotId": [
                158
            ],
            "createdBy": [
                361
            ],
            "defaultComplexity": [
                361
            ],
            "defaultLength": [
                361
            ],
            "defaultTone": [
                361
            ],
            "defaultType": [
                361
            ],
            "description": [
                361
            ],
            "name": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotStddevFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotStddevPopFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotStddevSampFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotStreamCursorInput": {
            "initialValue": [
                131
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotStreamCursorValueInput": {
            "avatar": [
                361
            ],
            "chatbotId": [
                158
            ],
            "createdBy": [
                361
            ],
            "defaultComplexity": [
                361
            ],
            "defaultLength": [
                361
            ],
            "defaultTone": [
                361
            ],
            "defaultType": [
                361
            ],
            "description": [
                361
            ],
            "name": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotSumFields": {
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotUpdateColumn": {},
        "ChatbotUpdates": {
            "_inc": [
                116
            ],
            "_set": [
                126
            ],
            "where": [
                74
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotVarPopFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotVarSampFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ChatbotVarianceFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnum": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumAggregate": {
            "aggregate": [
                140
            ],
            "nodes": [
                138
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumAggregateFields": {
            "count": [
                158,
                {
                    "columns": [
                        150,
                        "[ComplexityEnumSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                144
            ],
            "min": [
                145
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumBoolExp": {
            "_and": [
                141
            ],
            "_not": [
                141
            ],
            "_or": [
                141
            ],
            "value": [
                362
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumConstraint": {},
        "ComplexityEnumInsertInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumMaxFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumMinFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                138
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumOnConflict": {
            "constraint": [
                142
            ],
            "updateColumns": [
                154
            ],
            "where": [
                141
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumOrderBy": {
            "value": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumPkColumnsInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumSelectColumn": {},
        "ComplexityEnumSetInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumStreamCursorInput": {
            "initialValue": [
                153
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumStreamCursorValueInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ComplexityEnumUpdateColumn": {},
        "ComplexityEnumUpdates": {
            "_set": [
                151
            ],
            "where": [
                141
            ],
            "__typename": [
                361
            ]
        },
        "CursorOrdering": {},
        "Float": {},
        "Int": {},
        "IntComparisonExp": {
            "_eq": [
                158
            ],
            "_gt": [
                158
            ],
            "_gte": [
                158
            ],
            "_in": [
                158
            ],
            "_isNull": [
                0
            ],
            "_lt": [
                158
            ],
            "_lte": [
                158
            ],
            "_neq": [
                158
            ],
            "_nin": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnum": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumAggregate": {
            "aggregate": [
                162
            ],
            "nodes": [
                160
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumAggregateFields": {
            "count": [
                158,
                {
                    "columns": [
                        172,
                        "[LengthEnumSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                166
            ],
            "min": [
                167
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumBoolExp": {
            "_and": [
                163
            ],
            "_not": [
                163
            ],
            "_or": [
                163
            ],
            "value": [
                362
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumConstraint": {},
        "LengthEnumInsertInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumMaxFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumMinFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                160
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumOnConflict": {
            "constraint": [
                164
            ],
            "updateColumns": [
                176
            ],
            "where": [
                163
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumOrderBy": {
            "value": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumPkColumnsInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumSelectColumn": {},
        "LengthEnumSetInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumStreamCursorInput": {
            "initialValue": [
                175
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumStreamCursorValueInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "LengthEnumUpdateColumn": {},
        "LengthEnumUpdates": {
            "_set": [
                173
            ],
            "where": [
                163
            ],
            "__typename": [
                361
            ]
        },
        "Message": {
            "content": [
                361
            ],
            "createdAt": [
                470
            ],
            "messageId": [
                471
            ],
            "role": [
                361
            ],
            "thread": [
                363
            ],
            "threadId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "MessageAggregate": {
            "aggregate": [
                181
            ],
            "nodes": [
                178
            ],
            "__typename": [
                361
            ]
        },
        "MessageAggregateBoolExp": {
            "count": [
                463
            ],
            "__typename": [
                361
            ]
        },
        "MessageAggregateFields": {
            "count": [
                158,
                {
                    "columns": [
                        195,
                        "[MessageSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                187
            ],
            "min": [
                189
            ],
            "__typename": [
                361
            ]
        },
        "MessageAggregateOrderBy": {
            "count": [
                219
            ],
            "max": [
                188
            ],
            "min": [
                190
            ],
            "__typename": [
                361
            ]
        },
        "MessageArrRelInsertInput": {
            "data": [
                186
            ],
            "onConflict": [
                192
            ],
            "__typename": [
                361
            ]
        },
        "MessageBoolExp": {
            "_and": [
                184
            ],
            "_not": [
                184
            ],
            "_or": [
                184
            ],
            "content": [
                362
            ],
            "createdAt": [
                404
            ],
            "messageId": [
                460
            ],
            "role": [
                362
            ],
            "thread": [
                371
            ],
            "threadId": [
                460
            ],
            "__typename": [
                361
            ]
        },
        "MessageConstraint": {},
        "MessageInsertInput": {
            "content": [
                361
            ],
            "createdAt": [
                470
            ],
            "messageId": [
                471
            ],
            "role": [
                361
            ],
            "thread": [
                380
            ],
            "threadId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "MessageMaxFields": {
            "content": [
                361
            ],
            "createdAt": [
                470
            ],
            "messageId": [
                471
            ],
            "role": [
                361
            ],
            "threadId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "MessageMaxOrderBy": {
            "content": [
                219
            ],
            "createdAt": [
                219
            ],
            "messageId": [
                219
            ],
            "role": [
                219
            ],
            "threadId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "MessageMinFields": {
            "content": [
                361
            ],
            "createdAt": [
                470
            ],
            "messageId": [
                471
            ],
            "role": [
                361
            ],
            "threadId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "MessageMinOrderBy": {
            "content": [
                219
            ],
            "createdAt": [
                219
            ],
            "messageId": [
                219
            ],
            "role": [
                219
            ],
            "threadId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "MessageMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                178
            ],
            "__typename": [
                361
            ]
        },
        "MessageOnConflict": {
            "constraint": [
                185
            ],
            "updateColumns": [
                217
            ],
            "where": [
                184
            ],
            "__typename": [
                361
            ]
        },
        "MessageOrderBy": {
            "content": [
                219
            ],
            "createdAt": [
                219
            ],
            "messageId": [
                219
            ],
            "role": [
                219
            ],
            "thread": [
                382
            ],
            "threadId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "MessagePkColumnsInput": {
            "messageId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "MessageSelectColumn": {},
        "MessageSetInput": {
            "content": [
                361
            ],
            "createdAt": [
                470
            ],
            "messageId": [
                471
            ],
            "role": [
                361
            ],
            "threadId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "MessageStreamCursorInput": {
            "initialValue": [
                198
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "MessageStreamCursorValueInput": {
            "content": [
                361
            ],
            "createdAt": [
                470
            ],
            "messageId": [
                471
            ],
            "role": [
                361
            ],
            "threadId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnum": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumAggregate": {
            "aggregate": [
                201
            ],
            "nodes": [
                199
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumAggregateFields": {
            "count": [
                158,
                {
                    "columns": [
                        211,
                        "[MessageTypeEnumSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                205
            ],
            "min": [
                206
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumBoolExp": {
            "_and": [
                202
            ],
            "_not": [
                202
            ],
            "_or": [
                202
            ],
            "value": [
                362
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumConstraint": {},
        "MessageTypeEnumInsertInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumMaxFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumMinFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                199
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumOnConflict": {
            "constraint": [
                203
            ],
            "updateColumns": [
                215
            ],
            "where": [
                202
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumOrderBy": {
            "value": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumPkColumnsInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumSelectColumn": {},
        "MessageTypeEnumSetInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumStreamCursorInput": {
            "initialValue": [
                214
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumStreamCursorValueInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "MessageTypeEnumUpdateColumn": {},
        "MessageTypeEnumUpdates": {
            "_set": [
                212
            ],
            "where": [
                202
            ],
            "__typename": [
                361
            ]
        },
        "MessageUpdateColumn": {},
        "MessageUpdates": {
            "_set": [
                196
            ],
            "where": [
                184
            ],
            "__typename": [
                361
            ]
        },
        "OrderBy": {},
        "Preference": {
            "chatbot": [
                70
            ],
            "chatbotId": [
                158
            ],
            "favorite": [
                0
            ],
            "preferenceId": [
                158
            ],
            "preferredComplexity": [
                361
            ],
            "preferredLength": [
                361
            ],
            "preferredTone": [
                361
            ],
            "preferredType": [
                361
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceAggregate": {
            "aggregate": [
                223
            ],
            "nodes": [
                220
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceAggregateBoolExp": {
            "bool_and": [
                464
            ],
            "bool_or": [
                465
            ],
            "count": [
                466
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceAggregateFields": {
            "avg": [
                226
            ],
            "count": [
                158,
                {
                    "columns": [
                        240,
                        "[PreferenceSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                232
            ],
            "min": [
                234
            ],
            "stddev": [
                244
            ],
            "stddevPop": [
                246
            ],
            "stddevSamp": [
                248
            ],
            "sum": [
                252
            ],
            "varPop": [
                256
            ],
            "varSamp": [
                258
            ],
            "variance": [
                260
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceAggregateOrderBy": {
            "avg": [
                227
            ],
            "count": [
                219
            ],
            "max": [
                233
            ],
            "min": [
                235
            ],
            "stddev": [
                245
            ],
            "stddevPop": [
                247
            ],
            "stddevSamp": [
                249
            ],
            "sum": [
                253
            ],
            "varPop": [
                257
            ],
            "varSamp": [
                259
            ],
            "variance": [
                261
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceArrRelInsertInput": {
            "data": [
                231
            ],
            "onConflict": [
                237
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceAvgFields": {
            "chatbotId": [
                157
            ],
            "preferenceId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceAvgOrderBy": {
            "chatbotId": [
                219
            ],
            "preferenceId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceBoolExp": {
            "_and": [
                228
            ],
            "_not": [
                228
            ],
            "_or": [
                228
            ],
            "chatbot": [
                74
            ],
            "chatbotId": [
                159
            ],
            "favorite": [
                1
            ],
            "preferenceId": [
                159
            ],
            "preferredComplexity": [
                362
            ],
            "preferredLength": [
                362
            ],
            "preferredTone": [
                362
            ],
            "preferredType": [
                362
            ],
            "userId": [
                460
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceConstraint": {},
        "PreferenceIncInput": {
            "chatbotId": [
                158
            ],
            "preferenceId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceInsertInput": {
            "chatbot": [
                121
            ],
            "chatbotId": [
                158
            ],
            "favorite": [
                0
            ],
            "preferenceId": [
                158
            ],
            "preferredComplexity": [
                361
            ],
            "preferredLength": [
                361
            ],
            "preferredTone": [
                361
            ],
            "preferredType": [
                361
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceMaxFields": {
            "chatbotId": [
                158
            ],
            "preferenceId": [
                158
            ],
            "preferredComplexity": [
                361
            ],
            "preferredLength": [
                361
            ],
            "preferredTone": [
                361
            ],
            "preferredType": [
                361
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceMaxOrderBy": {
            "chatbotId": [
                219
            ],
            "preferenceId": [
                219
            ],
            "preferredComplexity": [
                219
            ],
            "preferredLength": [
                219
            ],
            "preferredTone": [
                219
            ],
            "preferredType": [
                219
            ],
            "userId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceMinFields": {
            "chatbotId": [
                158
            ],
            "preferenceId": [
                158
            ],
            "preferredComplexity": [
                361
            ],
            "preferredLength": [
                361
            ],
            "preferredTone": [
                361
            ],
            "preferredType": [
                361
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceMinOrderBy": {
            "chatbotId": [
                219
            ],
            "preferenceId": [
                219
            ],
            "preferredComplexity": [
                219
            ],
            "preferredLength": [
                219
            ],
            "preferredTone": [
                219
            ],
            "preferredType": [
                219
            ],
            "userId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                220
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceOnConflict": {
            "constraint": [
                229
            ],
            "updateColumns": [
                254
            ],
            "where": [
                228
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceOrderBy": {
            "chatbot": [
                123
            ],
            "chatbotId": [
                219
            ],
            "favorite": [
                219
            ],
            "preferenceId": [
                219
            ],
            "preferredComplexity": [
                219
            ],
            "preferredLength": [
                219
            ],
            "preferredTone": [
                219
            ],
            "preferredType": [
                219
            ],
            "userId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PreferencePkColumnsInput": {
            "preferenceId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceSelectColumn": {},
        "PreferenceSelectColumnPreferenceAggregateBoolExpBool_andArgumentsColumns": {},
        "PreferenceSelectColumnPreferenceAggregateBoolExpBool_orArgumentsColumns": {},
        "PreferenceSetInput": {
            "chatbotId": [
                158
            ],
            "favorite": [
                0
            ],
            "preferenceId": [
                158
            ],
            "preferredComplexity": [
                361
            ],
            "preferredLength": [
                361
            ],
            "preferredTone": [
                361
            ],
            "preferredType": [
                361
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceStddevFields": {
            "chatbotId": [
                157
            ],
            "preferenceId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceStddevOrderBy": {
            "chatbotId": [
                219
            ],
            "preferenceId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceStddevPopFields": {
            "chatbotId": [
                157
            ],
            "preferenceId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceStddevPopOrderBy": {
            "chatbotId": [
                219
            ],
            "preferenceId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceStddevSampFields": {
            "chatbotId": [
                157
            ],
            "preferenceId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceStddevSampOrderBy": {
            "chatbotId": [
                219
            ],
            "preferenceId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceStreamCursorInput": {
            "initialValue": [
                251
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceStreamCursorValueInput": {
            "chatbotId": [
                158
            ],
            "favorite": [
                0
            ],
            "preferenceId": [
                158
            ],
            "preferredComplexity": [
                361
            ],
            "preferredLength": [
                361
            ],
            "preferredTone": [
                361
            ],
            "preferredType": [
                361
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceSumFields": {
            "chatbotId": [
                158
            ],
            "preferenceId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceSumOrderBy": {
            "chatbotId": [
                219
            ],
            "preferenceId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceUpdateColumn": {},
        "PreferenceUpdates": {
            "_inc": [
                230
            ],
            "_set": [
                243
            ],
            "where": [
                228
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceVarPopFields": {
            "chatbotId": [
                157
            ],
            "preferenceId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceVarPopOrderBy": {
            "chatbotId": [
                219
            ],
            "preferenceId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceVarSampFields": {
            "chatbotId": [
                157
            ],
            "preferenceId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceVarSampOrderBy": {
            "chatbotId": [
                219
            ],
            "preferenceId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceVarianceFields": {
            "chatbotId": [
                157
            ],
            "preferenceId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PreferenceVarianceOrderBy": {
            "chatbotId": [
                219
            ],
            "preferenceId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "Prompt": {
            "chatbots": [
                271,
                {
                    "distinctOn": [
                        291,
                        "[PromptChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        289,
                        "[PromptChatbotOrderBy!]"
                    ],
                    "where": [
                        279
                    ]
                }
            ],
            "chatbotsAggregate": [
                272,
                {
                    "distinctOn": [
                        291,
                        "[PromptChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        289,
                        "[PromptChatbotOrderBy!]"
                    ],
                    "where": [
                        279
                    ]
                }
            ],
            "content": [
                361
            ],
            "promptId": [
                158
            ],
            "promptName": [
                361
            ],
            "type": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptAggregate": {
            "aggregate": [
                265
            ],
            "nodes": [
                262
            ],
            "__typename": [
                361
            ]
        },
        "PromptAggregateBoolExp": {
            "count": [
                467
            ],
            "__typename": [
                361
            ]
        },
        "PromptAggregateFields": {
            "avg": [
                268
            ],
            "count": [
                158,
                {
                    "columns": [
                        323,
                        "[PromptSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                314
            ],
            "min": [
                316
            ],
            "stddev": [
                325
            ],
            "stddevPop": [
                327
            ],
            "stddevSamp": [
                329
            ],
            "sum": [
                333
            ],
            "varPop": [
                355
            ],
            "varSamp": [
                357
            ],
            "variance": [
                359
            ],
            "__typename": [
                361
            ]
        },
        "PromptAggregateOrderBy": {
            "avg": [
                269
            ],
            "count": [
                219
            ],
            "max": [
                315
            ],
            "min": [
                317
            ],
            "stddev": [
                326
            ],
            "stddevPop": [
                328
            ],
            "stddevSamp": [
                330
            ],
            "sum": [
                334
            ],
            "varPop": [
                356
            ],
            "varSamp": [
                358
            ],
            "variance": [
                360
            ],
            "__typename": [
                361
            ]
        },
        "PromptArrRelInsertInput": {
            "data": [
                313
            ],
            "onConflict": [
                320
            ],
            "__typename": [
                361
            ]
        },
        "PromptAvgFields": {
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptAvgOrderBy": {
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptBoolExp": {
            "_and": [
                270
            ],
            "_not": [
                270
            ],
            "_or": [
                270
            ],
            "chatbots": [
                279
            ],
            "chatbotsAggregate": [
                273
            ],
            "content": [
                362
            ],
            "promptId": [
                159
            ],
            "promptName": [
                362
            ],
            "type": [
                362
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbot": {
            "chabotId": [
                158
            ],
            "chatbot": [
                70
            ],
            "prompt": [
                262
            ],
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotAggregate": {
            "aggregate": [
                274
            ],
            "nodes": [
                271
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotAggregateBoolExp": {
            "count": [
                468
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotAggregateFields": {
            "avg": [
                277
            ],
            "count": [
                158,
                {
                    "columns": [
                        291,
                        "[PromptChatbotSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                283
            ],
            "min": [
                285
            ],
            "stddev": [
                293
            ],
            "stddevPop": [
                295
            ],
            "stddevSamp": [
                297
            ],
            "sum": [
                301
            ],
            "varPop": [
                305
            ],
            "varSamp": [
                307
            ],
            "variance": [
                309
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotAggregateOrderBy": {
            "avg": [
                278
            ],
            "count": [
                219
            ],
            "max": [
                284
            ],
            "min": [
                286
            ],
            "stddev": [
                294
            ],
            "stddevPop": [
                296
            ],
            "stddevSamp": [
                298
            ],
            "sum": [
                302
            ],
            "varPop": [
                306
            ],
            "varSamp": [
                308
            ],
            "variance": [
                310
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotArrRelInsertInput": {
            "data": [
                282
            ],
            "onConflict": [
                288
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotAvgFields": {
            "chabotId": [
                157
            ],
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotAvgOrderBy": {
            "chabotId": [
                219
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotBoolExp": {
            "_and": [
                279
            ],
            "_not": [
                279
            ],
            "_or": [
                279
            ],
            "chabotId": [
                159
            ],
            "chatbot": [
                74
            ],
            "prompt": [
                270
            ],
            "promptId": [
                159
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotConstraint": {},
        "PromptChatbotIncInput": {
            "chabotId": [
                158
            ],
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotInsertInput": {
            "chabotId": [
                158
            ],
            "chatbot": [
                121
            ],
            "prompt": [
                319
            ],
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotMaxFields": {
            "chabotId": [
                158
            ],
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotMaxOrderBy": {
            "chabotId": [
                219
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotMinFields": {
            "chabotId": [
                158
            ],
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotMinOrderBy": {
            "chabotId": [
                219
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                271
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotOnConflict": {
            "constraint": [
                280
            ],
            "updateColumns": [
                303
            ],
            "where": [
                279
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotOrderBy": {
            "chabotId": [
                219
            ],
            "chatbot": [
                123
            ],
            "prompt": [
                321
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotPkColumnsInput": {
            "chabotId": [
                158
            ],
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotSelectColumn": {},
        "PromptChatbotSetInput": {
            "chabotId": [
                158
            ],
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotStddevFields": {
            "chabotId": [
                157
            ],
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotStddevOrderBy": {
            "chabotId": [
                219
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotStddevPopFields": {
            "chabotId": [
                157
            ],
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotStddevPopOrderBy": {
            "chabotId": [
                219
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotStddevSampFields": {
            "chabotId": [
                157
            ],
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotStddevSampOrderBy": {
            "chabotId": [
                219
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotStreamCursorInput": {
            "initialValue": [
                300
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotStreamCursorValueInput": {
            "chabotId": [
                158
            ],
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotSumFields": {
            "chabotId": [
                158
            ],
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotSumOrderBy": {
            "chabotId": [
                219
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotUpdateColumn": {},
        "PromptChatbotUpdates": {
            "_inc": [
                281
            ],
            "_set": [
                292
            ],
            "where": [
                279
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotVarPopFields": {
            "chabotId": [
                157
            ],
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotVarPopOrderBy": {
            "chabotId": [
                219
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotVarSampFields": {
            "chabotId": [
                157
            ],
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotVarSampOrderBy": {
            "chabotId": [
                219
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotVarianceFields": {
            "chabotId": [
                157
            ],
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptChatbotVarianceOrderBy": {
            "chabotId": [
                219
            ],
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptConstraint": {},
        "PromptIncInput": {
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptInsertInput": {
            "chatbots": [
                276
            ],
            "content": [
                361
            ],
            "promptId": [
                158
            ],
            "promptName": [
                361
            ],
            "type": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptMaxFields": {
            "content": [
                361
            ],
            "promptId": [
                158
            ],
            "promptName": [
                361
            ],
            "type": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptMaxOrderBy": {
            "content": [
                219
            ],
            "promptId": [
                219
            ],
            "promptName": [
                219
            ],
            "type": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptMinFields": {
            "content": [
                361
            ],
            "promptId": [
                158
            ],
            "promptName": [
                361
            ],
            "type": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptMinOrderBy": {
            "content": [
                219
            ],
            "promptId": [
                219
            ],
            "promptName": [
                219
            ],
            "type": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                262
            ],
            "__typename": [
                361
            ]
        },
        "PromptObjRelInsertInput": {
            "data": [
                313
            ],
            "onConflict": [
                320
            ],
            "__typename": [
                361
            ]
        },
        "PromptOnConflict": {
            "constraint": [
                311
            ],
            "updateColumns": [
                353
            ],
            "where": [
                270
            ],
            "__typename": [
                361
            ]
        },
        "PromptOrderBy": {
            "chatbotsAggregate": [
                275
            ],
            "content": [
                219
            ],
            "promptId": [
                219
            ],
            "promptName": [
                219
            ],
            "type": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptPkColumnsInput": {
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptSelectColumn": {},
        "PromptSetInput": {
            "content": [
                361
            ],
            "promptId": [
                158
            ],
            "promptName": [
                361
            ],
            "type": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptStddevFields": {
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptStddevOrderBy": {
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptStddevPopFields": {
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptStddevPopOrderBy": {
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptStddevSampFields": {
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptStddevSampOrderBy": {
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptStreamCursorInput": {
            "initialValue": [
                332
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "PromptStreamCursorValueInput": {
            "content": [
                361
            ],
            "promptId": [
                158
            ],
            "promptName": [
                361
            ],
            "type": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptSumFields": {
            "promptId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "PromptSumOrderBy": {
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnum": {
            "prompts": [
                262,
                {
                    "distinctOn": [
                        323,
                        "[PromptSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        321,
                        "[PromptOrderBy!]"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "promptsAggregate": [
                263,
                {
                    "distinctOn": [
                        323,
                        "[PromptSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        321,
                        "[PromptOrderBy!]"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumAggregate": {
            "aggregate": [
                337
            ],
            "nodes": [
                335
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumAggregateFields": {
            "count": [
                158,
                {
                    "columns": [
                        347,
                        "[PromptTypeEnumSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                341
            ],
            "min": [
                342
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumBoolExp": {
            "_and": [
                338
            ],
            "_not": [
                338
            ],
            "_or": [
                338
            ],
            "prompts": [
                270
            ],
            "promptsAggregate": [
                264
            ],
            "value": [
                362
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumConstraint": {},
        "PromptTypeEnumInsertInput": {
            "prompts": [
                267
            ],
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumMaxFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumMinFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                335
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumOnConflict": {
            "constraint": [
                339
            ],
            "updateColumns": [
                351
            ],
            "where": [
                338
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumOrderBy": {
            "promptsAggregate": [
                266
            ],
            "value": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumPkColumnsInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumSelectColumn": {},
        "PromptTypeEnumSetInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumStreamCursorInput": {
            "initialValue": [
                350
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumStreamCursorValueInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "PromptTypeEnumUpdateColumn": {},
        "PromptTypeEnumUpdates": {
            "_set": [
                348
            ],
            "where": [
                338
            ],
            "__typename": [
                361
            ]
        },
        "PromptUpdateColumn": {},
        "PromptUpdates": {
            "_inc": [
                312
            ],
            "_set": [
                324
            ],
            "where": [
                270
            ],
            "__typename": [
                361
            ]
        },
        "PromptVarPopFields": {
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptVarPopOrderBy": {
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptVarSampFields": {
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptVarSampOrderBy": {
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "PromptVarianceFields": {
            "promptId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "PromptVarianceOrderBy": {
            "promptId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "String": {},
        "StringComparisonExp": {
            "_eq": [
                361
            ],
            "_gt": [
                361
            ],
            "_gte": [
                361
            ],
            "_ilike": [
                361
            ],
            "_in": [
                361
            ],
            "_iregex": [
                361
            ],
            "_isNull": [
                0
            ],
            "_like": [
                361
            ],
            "_lt": [
                361
            ],
            "_lte": [
                361
            ],
            "_neq": [
                361
            ],
            "_nilike": [
                361
            ],
            "_nin": [
                361
            ],
            "_niregex": [
                361
            ],
            "_nlike": [
                361
            ],
            "_nregex": [
                361
            ],
            "_nsimilar": [
                361
            ],
            "_regex": [
                361
            ],
            "_similar": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "Thread": {
            "chatbot": [
                70
            ],
            "chatbotId": [
                158
            ],
            "createdAt": [
                470
            ],
            "messages": [
                178,
                {
                    "distinctOn": [
                        195,
                        "[MessageSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        193,
                        "[MessageOrderBy!]"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "messagesAggregate": [
                179,
                {
                    "distinctOn": [
                        195,
                        "[MessageSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        193,
                        "[MessageOrderBy!]"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "threadId": [
                471
            ],
            "updatedAt": [
                470
            ],
            "user": [
                441
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "ThreadAggregate": {
            "aggregate": [
                366
            ],
            "nodes": [
                363
            ],
            "__typename": [
                361
            ]
        },
        "ThreadAggregateBoolExp": {
            "count": [
                469
            ],
            "__typename": [
                361
            ]
        },
        "ThreadAggregateFields": {
            "avg": [
                369
            ],
            "count": [
                158,
                {
                    "columns": [
                        384,
                        "[ThreadSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                375
            ],
            "min": [
                377
            ],
            "stddev": [
                386
            ],
            "stddevPop": [
                388
            ],
            "stddevSamp": [
                390
            ],
            "sum": [
                394
            ],
            "varPop": [
                398
            ],
            "varSamp": [
                400
            ],
            "variance": [
                402
            ],
            "__typename": [
                361
            ]
        },
        "ThreadAggregateOrderBy": {
            "avg": [
                370
            ],
            "count": [
                219
            ],
            "max": [
                376
            ],
            "min": [
                378
            ],
            "stddev": [
                387
            ],
            "stddevPop": [
                389
            ],
            "stddevSamp": [
                391
            ],
            "sum": [
                395
            ],
            "varPop": [
                399
            ],
            "varSamp": [
                401
            ],
            "variance": [
                403
            ],
            "__typename": [
                361
            ]
        },
        "ThreadArrRelInsertInput": {
            "data": [
                374
            ],
            "onConflict": [
                381
            ],
            "__typename": [
                361
            ]
        },
        "ThreadAvgFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ThreadAvgOrderBy": {
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ThreadBoolExp": {
            "_and": [
                371
            ],
            "_not": [
                371
            ],
            "_or": [
                371
            ],
            "chatbot": [
                74
            ],
            "chatbotId": [
                159
            ],
            "createdAt": [
                404
            ],
            "messages": [
                184
            ],
            "messagesAggregate": [
                180
            ],
            "threadId": [
                460
            ],
            "updatedAt": [
                404
            ],
            "user": [
                444
            ],
            "userId": [
                460
            ],
            "__typename": [
                361
            ]
        },
        "ThreadConstraint": {},
        "ThreadIncInput": {
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ThreadInsertInput": {
            "chatbot": [
                121
            ],
            "chatbotId": [
                158
            ],
            "createdAt": [
                470
            ],
            "messages": [
                183
            ],
            "threadId": [
                471
            ],
            "updatedAt": [
                470
            ],
            "user": [
                450
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "ThreadMaxFields": {
            "chatbotId": [
                158
            ],
            "createdAt": [
                470
            ],
            "threadId": [
                471
            ],
            "updatedAt": [
                470
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "ThreadMaxOrderBy": {
            "chatbotId": [
                219
            ],
            "createdAt": [
                219
            ],
            "threadId": [
                219
            ],
            "updatedAt": [
                219
            ],
            "userId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ThreadMinFields": {
            "chatbotId": [
                158
            ],
            "createdAt": [
                470
            ],
            "threadId": [
                471
            ],
            "updatedAt": [
                470
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "ThreadMinOrderBy": {
            "chatbotId": [
                219
            ],
            "createdAt": [
                219
            ],
            "threadId": [
                219
            ],
            "updatedAt": [
                219
            ],
            "userId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ThreadMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                363
            ],
            "__typename": [
                361
            ]
        },
        "ThreadObjRelInsertInput": {
            "data": [
                374
            ],
            "onConflict": [
                381
            ],
            "__typename": [
                361
            ]
        },
        "ThreadOnConflict": {
            "constraint": [
                372
            ],
            "updateColumns": [
                396
            ],
            "where": [
                371
            ],
            "__typename": [
                361
            ]
        },
        "ThreadOrderBy": {
            "chatbot": [
                123
            ],
            "chatbotId": [
                219
            ],
            "createdAt": [
                219
            ],
            "messagesAggregate": [
                182
            ],
            "threadId": [
                219
            ],
            "updatedAt": [
                219
            ],
            "user": [
                452
            ],
            "userId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ThreadPkColumnsInput": {
            "threadId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "ThreadSelectColumn": {},
        "ThreadSetInput": {
            "chatbotId": [
                158
            ],
            "createdAt": [
                470
            ],
            "threadId": [
                471
            ],
            "updatedAt": [
                470
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "ThreadStddevFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ThreadStddevOrderBy": {
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ThreadStddevPopFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ThreadStddevPopOrderBy": {
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ThreadStddevSampFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ThreadStddevSampOrderBy": {
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ThreadStreamCursorInput": {
            "initialValue": [
                393
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "ThreadStreamCursorValueInput": {
            "chatbotId": [
                158
            ],
            "createdAt": [
                470
            ],
            "threadId": [
                471
            ],
            "updatedAt": [
                470
            ],
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "ThreadSumFields": {
            "chatbotId": [
                158
            ],
            "__typename": [
                361
            ]
        },
        "ThreadSumOrderBy": {
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ThreadUpdateColumn": {},
        "ThreadUpdates": {
            "_inc": [
                373
            ],
            "_set": [
                385
            ],
            "where": [
                371
            ],
            "__typename": [
                361
            ]
        },
        "ThreadVarPopFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ThreadVarPopOrderBy": {
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ThreadVarSampFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ThreadVarSampOrderBy": {
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ThreadVarianceFields": {
            "chatbotId": [
                157
            ],
            "__typename": [
                361
            ]
        },
        "ThreadVarianceOrderBy": {
            "chatbotId": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "TimestamptzComparisonExp": {
            "_eq": [
                470
            ],
            "_gt": [
                470
            ],
            "_gte": [
                470
            ],
            "_in": [
                470
            ],
            "_isNull": [
                0
            ],
            "_lt": [
                470
            ],
            "_lte": [
                470
            ],
            "_neq": [
                470
            ],
            "_nin": [
                470
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnum": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumAggregate": {
            "aggregate": [
                407
            ],
            "nodes": [
                405
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumAggregateFields": {
            "count": [
                158,
                {
                    "columns": [
                        417,
                        "[ToneEnumSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                411
            ],
            "min": [
                412
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumBoolExp": {
            "_and": [
                408
            ],
            "_not": [
                408
            ],
            "_or": [
                408
            ],
            "value": [
                362
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumConstraint": {},
        "ToneEnumInsertInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumMaxFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumMinFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                405
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumOnConflict": {
            "constraint": [
                409
            ],
            "updateColumns": [
                421
            ],
            "where": [
                408
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumOrderBy": {
            "value": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumPkColumnsInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumSelectColumn": {},
        "ToneEnumSetInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumStreamCursorInput": {
            "initialValue": [
                420
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumStreamCursorValueInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "ToneEnumUpdateColumn": {},
        "ToneEnumUpdates": {
            "_set": [
                418
            ],
            "where": [
                408
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnum": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumAggregate": {
            "aggregate": [
                425
            ],
            "nodes": [
                423
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumAggregateFields": {
            "count": [
                158,
                {
                    "columns": [
                        435,
                        "[TypeEnumSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                429
            ],
            "min": [
                430
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumBoolExp": {
            "_and": [
                426
            ],
            "_not": [
                426
            ],
            "_or": [
                426
            ],
            "value": [
                362
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumConstraint": {},
        "TypeEnumInsertInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumMaxFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumMinFields": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                423
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumOnConflict": {
            "constraint": [
                427
            ],
            "updateColumns": [
                439
            ],
            "where": [
                426
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumOrderBy": {
            "value": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumPkColumnsInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumSelectColumn": {},
        "TypeEnumSetInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumStreamCursorInput": {
            "initialValue": [
                438
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumStreamCursorValueInput": {
            "value": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "TypeEnumUpdateColumn": {},
        "TypeEnumUpdates": {
            "_set": [
                436
            ],
            "where": [
                426
            ],
            "__typename": [
                361
            ]
        },
        "User": {
            "chats": [
                30,
                {
                    "distinctOn": [
                        50,
                        "[ChatSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        48,
                        "[ChatOrderBy!]"
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "chatsAggregate": [
                31,
                {
                    "distinctOn": [
                        50,
                        "[ChatSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        48,
                        "[ChatOrderBy!]"
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "dateJoined": [
                470
            ],
            "email": [
                361
            ],
            "lastLogin": [
                470
            ],
            "password": [
                361
            ],
            "preferences": [
                220,
                {
                    "distinctOn": [
                        240,
                        "[PreferenceSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        238,
                        "[PreferenceOrderBy!]"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "preferencesAggregate": [
                221,
                {
                    "distinctOn": [
                        240,
                        "[PreferenceSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        238,
                        "[PreferenceOrderBy!]"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "profilePicture": [
                361
            ],
            "threads": [
                363,
                {
                    "distinctOn": [
                        384,
                        "[ThreadSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        382,
                        "[ThreadOrderBy!]"
                    ],
                    "where": [
                        371
                    ]
                }
            ],
            "threadsAggregate": [
                364,
                {
                    "distinctOn": [
                        384,
                        "[ThreadSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        382,
                        "[ThreadOrderBy!]"
                    ],
                    "where": [
                        371
                    ]
                }
            ],
            "userId": [
                471
            ],
            "username": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "UserAggregate": {
            "aggregate": [
                443
            ],
            "nodes": [
                441
            ],
            "__typename": [
                361
            ]
        },
        "UserAggregateFields": {
            "count": [
                158,
                {
                    "columns": [
                        454,
                        "[UserSelectColumn!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                447
            ],
            "min": [
                448
            ],
            "__typename": [
                361
            ]
        },
        "UserBoolExp": {
            "_and": [
                444
            ],
            "_not": [
                444
            ],
            "_or": [
                444
            ],
            "chats": [
                38
            ],
            "chatsAggregate": [
                32
            ],
            "dateJoined": [
                404
            ],
            "email": [
                362
            ],
            "lastLogin": [
                404
            ],
            "password": [
                362
            ],
            "preferences": [
                228
            ],
            "preferencesAggregate": [
                222
            ],
            "profilePicture": [
                362
            ],
            "threads": [
                371
            ],
            "threadsAggregate": [
                365
            ],
            "userId": [
                460
            ],
            "username": [
                362
            ],
            "__typename": [
                361
            ]
        },
        "UserConstraint": {},
        "UserInsertInput": {
            "chats": [
                35
            ],
            "dateJoined": [
                470
            ],
            "email": [
                361
            ],
            "lastLogin": [
                470
            ],
            "password": [
                361
            ],
            "preferences": [
                225
            ],
            "profilePicture": [
                361
            ],
            "threads": [
                368
            ],
            "userId": [
                471
            ],
            "username": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "UserMaxFields": {
            "dateJoined": [
                470
            ],
            "email": [
                361
            ],
            "lastLogin": [
                470
            ],
            "password": [
                361
            ],
            "profilePicture": [
                361
            ],
            "userId": [
                471
            ],
            "username": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "UserMinFields": {
            "dateJoined": [
                470
            ],
            "email": [
                361
            ],
            "lastLogin": [
                470
            ],
            "password": [
                361
            ],
            "profilePicture": [
                361
            ],
            "userId": [
                471
            ],
            "username": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "UserMutationResponse": {
            "affectedRows": [
                158
            ],
            "returning": [
                441
            ],
            "__typename": [
                361
            ]
        },
        "UserObjRelInsertInput": {
            "data": [
                446
            ],
            "onConflict": [
                451
            ],
            "__typename": [
                361
            ]
        },
        "UserOnConflict": {
            "constraint": [
                445
            ],
            "updateColumns": [
                458
            ],
            "where": [
                444
            ],
            "__typename": [
                361
            ]
        },
        "UserOrderBy": {
            "chatsAggregate": [
                34
            ],
            "dateJoined": [
                219
            ],
            "email": [
                219
            ],
            "lastLogin": [
                219
            ],
            "password": [
                219
            ],
            "preferencesAggregate": [
                224
            ],
            "profilePicture": [
                219
            ],
            "threadsAggregate": [
                367
            ],
            "userId": [
                219
            ],
            "username": [
                219
            ],
            "__typename": [
                361
            ]
        },
        "UserPkColumnsInput": {
            "userId": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "UserSelectColumn": {},
        "UserSetInput": {
            "dateJoined": [
                470
            ],
            "email": [
                361
            ],
            "lastLogin": [
                470
            ],
            "password": [
                361
            ],
            "profilePicture": [
                361
            ],
            "userId": [
                471
            ],
            "username": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "UserStreamCursorInput": {
            "initialValue": [
                457
            ],
            "ordering": [
                156
            ],
            "__typename": [
                361
            ]
        },
        "UserStreamCursorValueInput": {
            "dateJoined": [
                470
            ],
            "email": [
                361
            ],
            "lastLogin": [
                470
            ],
            "password": [
                361
            ],
            "profilePicture": [
                361
            ],
            "userId": [
                471
            ],
            "username": [
                361
            ],
            "__typename": [
                361
            ]
        },
        "UserUpdateColumn": {},
        "UserUpdates": {
            "_set": [
                455
            ],
            "where": [
                444
            ],
            "__typename": [
                361
            ]
        },
        "UuidComparisonExp": {
            "_eq": [
                471
            ],
            "_gt": [
                471
            ],
            "_gte": [
                471
            ],
            "_in": [
                471
            ],
            "_isNull": [
                0
            ],
            "_lt": [
                471
            ],
            "_lte": [
                471
            ],
            "_neq": [
                471
            ],
            "_nin": [
                471
            ],
            "__typename": [
                361
            ]
        },
        "chatAggregateBoolExpCount": {
            "arguments": [
                50
            ],
            "distinct": [
                0
            ],
            "filter": [
                38
            ],
            "predicate": [
                159
            ],
            "__typename": [
                361
            ]
        },
        "chatbotCategoryAggregateBoolExpCount": {
            "arguments": [
                95
            ],
            "distinct": [
                0
            ],
            "filter": [
                83
            ],
            "predicate": [
                159
            ],
            "__typename": [
                361
            ]
        },
        "messageAggregateBoolExpCount": {
            "arguments": [
                195
            ],
            "distinct": [
                0
            ],
            "filter": [
                184
            ],
            "predicate": [
                159
            ],
            "__typename": [
                361
            ]
        },
        "preferenceAggregateBoolExpBool_and": {
            "arguments": [
                241
            ],
            "distinct": [
                0
            ],
            "filter": [
                228
            ],
            "predicate": [
                1
            ],
            "__typename": [
                361
            ]
        },
        "preferenceAggregateBoolExpBool_or": {
            "arguments": [
                242
            ],
            "distinct": [
                0
            ],
            "filter": [
                228
            ],
            "predicate": [
                1
            ],
            "__typename": [
                361
            ]
        },
        "preferenceAggregateBoolExpCount": {
            "arguments": [
                240
            ],
            "distinct": [
                0
            ],
            "filter": [
                228
            ],
            "predicate": [
                159
            ],
            "__typename": [
                361
            ]
        },
        "promptAggregateBoolExpCount": {
            "arguments": [
                323
            ],
            "distinct": [
                0
            ],
            "filter": [
                270
            ],
            "predicate": [
                159
            ],
            "__typename": [
                361
            ]
        },
        "promptChatbotAggregateBoolExpCount": {
            "arguments": [
                291
            ],
            "distinct": [
                0
            ],
            "filter": [
                279
            ],
            "predicate": [
                159
            ],
            "__typename": [
                361
            ]
        },
        "threadAggregateBoolExpCount": {
            "arguments": [
                384
            ],
            "distinct": [
                0
            ],
            "filter": [
                371
            ],
            "predicate": [
                159
            ],
            "__typename": [
                361
            ]
        },
        "timestamptz": {},
        "uuid": {},
        "Query": {
            "category": [
                2,
                {
                    "distinctOn": [
                        17,
                        "[CategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        15,
                        "[CategoryOrderBy!]"
                    ],
                    "where": [
                        6
                    ]
                }
            ],
            "categoryAggregate": [
                3,
                {
                    "distinctOn": [
                        17,
                        "[CategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        15,
                        "[CategoryOrderBy!]"
                    ],
                    "where": [
                        6
                    ]
                }
            ],
            "categoryByPk": [
                2,
                {
                    "categoryId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "chat": [
                30,
                {
                    "distinctOn": [
                        50,
                        "[ChatSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        48,
                        "[ChatOrderBy!]"
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "chatAggregate": [
                31,
                {
                    "distinctOn": [
                        50,
                        "[ChatSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        48,
                        "[ChatOrderBy!]"
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "chatByPk": [
                30,
                {
                    "chatId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "chatbot": [
                70,
                {
                    "distinctOn": [
                        125,
                        "[ChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        123,
                        "[ChatbotOrderBy!]"
                    ],
                    "where": [
                        74
                    ]
                }
            ],
            "chatbotAggregate": [
                71,
                {
                    "distinctOn": [
                        125,
                        "[ChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        123,
                        "[ChatbotOrderBy!]"
                    ],
                    "where": [
                        74
                    ]
                }
            ],
            "chatbotByPk": [
                70,
                {
                    "chatbotId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "chatbotCategory": [
                75,
                {
                    "distinctOn": [
                        95,
                        "[ChatbotCategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        93,
                        "[ChatbotCategoryOrderBy!]"
                    ],
                    "where": [
                        83
                    ]
                }
            ],
            "chatbotCategoryAggregate": [
                76,
                {
                    "distinctOn": [
                        95,
                        "[ChatbotCategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        93,
                        "[ChatbotCategoryOrderBy!]"
                    ],
                    "where": [
                        83
                    ]
                }
            ],
            "chatbotCategoryByPk": [
                75,
                {
                    "categoryId": [
                        158,
                        "Int!"
                    ],
                    "chatbotId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "complexityEnum": [
                138,
                {
                    "distinctOn": [
                        150,
                        "[ComplexityEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        148,
                        "[ComplexityEnumOrderBy!]"
                    ],
                    "where": [
                        141
                    ]
                }
            ],
            "complexityEnumAggregate": [
                139,
                {
                    "distinctOn": [
                        150,
                        "[ComplexityEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        148,
                        "[ComplexityEnumOrderBy!]"
                    ],
                    "where": [
                        141
                    ]
                }
            ],
            "complexityEnumByPk": [
                138,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "lengthEnum": [
                160,
                {
                    "distinctOn": [
                        172,
                        "[LengthEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        170,
                        "[LengthEnumOrderBy!]"
                    ],
                    "where": [
                        163
                    ]
                }
            ],
            "lengthEnumAggregate": [
                161,
                {
                    "distinctOn": [
                        172,
                        "[LengthEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        170,
                        "[LengthEnumOrderBy!]"
                    ],
                    "where": [
                        163
                    ]
                }
            ],
            "lengthEnumByPk": [
                160,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "message": [
                178,
                {
                    "distinctOn": [
                        195,
                        "[MessageSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        193,
                        "[MessageOrderBy!]"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "messageAggregate": [
                179,
                {
                    "distinctOn": [
                        195,
                        "[MessageSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        193,
                        "[MessageOrderBy!]"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "messageByPk": [
                178,
                {
                    "messageId": [
                        471,
                        "uuid!"
                    ]
                }
            ],
            "messageTypeEnum": [
                199,
                {
                    "distinctOn": [
                        211,
                        "[MessageTypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        209,
                        "[MessageTypeEnumOrderBy!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "messageTypeEnumAggregate": [
                200,
                {
                    "distinctOn": [
                        211,
                        "[MessageTypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        209,
                        "[MessageTypeEnumOrderBy!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "messageTypeEnumByPk": [
                199,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "preference": [
                220,
                {
                    "distinctOn": [
                        240,
                        "[PreferenceSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        238,
                        "[PreferenceOrderBy!]"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "preferenceAggregate": [
                221,
                {
                    "distinctOn": [
                        240,
                        "[PreferenceSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        238,
                        "[PreferenceOrderBy!]"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "preferenceByPk": [
                220,
                {
                    "preferenceId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "prompt": [
                262,
                {
                    "distinctOn": [
                        323,
                        "[PromptSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        321,
                        "[PromptOrderBy!]"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "promptAggregate": [
                263,
                {
                    "distinctOn": [
                        323,
                        "[PromptSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        321,
                        "[PromptOrderBy!]"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "promptByPk": [
                262,
                {
                    "promptId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "promptChatbot": [
                271,
                {
                    "distinctOn": [
                        291,
                        "[PromptChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        289,
                        "[PromptChatbotOrderBy!]"
                    ],
                    "where": [
                        279
                    ]
                }
            ],
            "promptChatbotAggregate": [
                272,
                {
                    "distinctOn": [
                        291,
                        "[PromptChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        289,
                        "[PromptChatbotOrderBy!]"
                    ],
                    "where": [
                        279
                    ]
                }
            ],
            "promptChatbotByPk": [
                271,
                {
                    "chabotId": [
                        158,
                        "Int!"
                    ],
                    "promptId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "promptTypeEnum": [
                335,
                {
                    "distinctOn": [
                        347,
                        "[PromptTypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        345,
                        "[PromptTypeEnumOrderBy!]"
                    ],
                    "where": [
                        338
                    ]
                }
            ],
            "promptTypeEnumAggregate": [
                336,
                {
                    "distinctOn": [
                        347,
                        "[PromptTypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        345,
                        "[PromptTypeEnumOrderBy!]"
                    ],
                    "where": [
                        338
                    ]
                }
            ],
            "promptTypeEnumByPk": [
                335,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "thread": [
                363,
                {
                    "distinctOn": [
                        384,
                        "[ThreadSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        382,
                        "[ThreadOrderBy!]"
                    ],
                    "where": [
                        371
                    ]
                }
            ],
            "threadAggregate": [
                364,
                {
                    "distinctOn": [
                        384,
                        "[ThreadSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        382,
                        "[ThreadOrderBy!]"
                    ],
                    "where": [
                        371
                    ]
                }
            ],
            "threadByPk": [
                363,
                {
                    "threadId": [
                        471,
                        "uuid!"
                    ]
                }
            ],
            "toneEnum": [
                405,
                {
                    "distinctOn": [
                        417,
                        "[ToneEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        415,
                        "[ToneEnumOrderBy!]"
                    ],
                    "where": [
                        408
                    ]
                }
            ],
            "toneEnumAggregate": [
                406,
                {
                    "distinctOn": [
                        417,
                        "[ToneEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        415,
                        "[ToneEnumOrderBy!]"
                    ],
                    "where": [
                        408
                    ]
                }
            ],
            "toneEnumByPk": [
                405,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "typeEnum": [
                423,
                {
                    "distinctOn": [
                        435,
                        "[TypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        433,
                        "[TypeEnumOrderBy!]"
                    ],
                    "where": [
                        426
                    ]
                }
            ],
            "typeEnumAggregate": [
                424,
                {
                    "distinctOn": [
                        435,
                        "[TypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        433,
                        "[TypeEnumOrderBy!]"
                    ],
                    "where": [
                        426
                    ]
                }
            ],
            "typeEnumByPk": [
                423,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "user": [
                441,
                {
                    "distinctOn": [
                        454,
                        "[UserSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        452,
                        "[UserOrderBy!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "userAggregate": [
                442,
                {
                    "distinctOn": [
                        454,
                        "[UserSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        452,
                        "[UserOrderBy!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "userByPk": [
                441,
                {
                    "userId": [
                        471,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                361
            ]
        },
        "Mutation": {
            "deleteCategory": [
                12,
                {
                    "where": [
                        6,
                        "CategoryBoolExp!"
                    ]
                }
            ],
            "deleteCategoryByPk": [
                2,
                {
                    "categoryId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "deleteChat": [
                46,
                {
                    "where": [
                        38,
                        "ChatBoolExp!"
                    ]
                }
            ],
            "deleteChatByPk": [
                30,
                {
                    "chatId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "deleteChatbot": [
                120,
                {
                    "where": [
                        74,
                        "ChatbotBoolExp!"
                    ]
                }
            ],
            "deleteChatbotByPk": [
                70,
                {
                    "chatbotId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "deleteChatbotCategory": [
                91,
                {
                    "where": [
                        83,
                        "ChatbotCategoryBoolExp!"
                    ]
                }
            ],
            "deleteChatbotCategoryByPk": [
                75,
                {
                    "categoryId": [
                        158,
                        "Int!"
                    ],
                    "chatbotId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "deleteComplexityEnum": [
                146,
                {
                    "where": [
                        141,
                        "ComplexityEnumBoolExp!"
                    ]
                }
            ],
            "deleteComplexityEnumByPk": [
                138,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "deleteLengthEnum": [
                168,
                {
                    "where": [
                        163,
                        "LengthEnumBoolExp!"
                    ]
                }
            ],
            "deleteLengthEnumByPk": [
                160,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "deleteMessage": [
                191,
                {
                    "where": [
                        184,
                        "MessageBoolExp!"
                    ]
                }
            ],
            "deleteMessageByPk": [
                178,
                {
                    "messageId": [
                        471,
                        "uuid!"
                    ]
                }
            ],
            "deleteMessageTypeEnum": [
                207,
                {
                    "where": [
                        202,
                        "MessageTypeEnumBoolExp!"
                    ]
                }
            ],
            "deleteMessageTypeEnumByPk": [
                199,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "deletePreference": [
                236,
                {
                    "where": [
                        228,
                        "PreferenceBoolExp!"
                    ]
                }
            ],
            "deletePreferenceByPk": [
                220,
                {
                    "preferenceId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "deletePrompt": [
                318,
                {
                    "where": [
                        270,
                        "PromptBoolExp!"
                    ]
                }
            ],
            "deletePromptByPk": [
                262,
                {
                    "promptId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "deletePromptChatbot": [
                287,
                {
                    "where": [
                        279,
                        "PromptChatbotBoolExp!"
                    ]
                }
            ],
            "deletePromptChatbotByPk": [
                271,
                {
                    "chabotId": [
                        158,
                        "Int!"
                    ],
                    "promptId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "deletePromptTypeEnum": [
                343,
                {
                    "where": [
                        338,
                        "PromptTypeEnumBoolExp!"
                    ]
                }
            ],
            "deletePromptTypeEnumByPk": [
                335,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "deleteThread": [
                379,
                {
                    "where": [
                        371,
                        "ThreadBoolExp!"
                    ]
                }
            ],
            "deleteThreadByPk": [
                363,
                {
                    "threadId": [
                        471,
                        "uuid!"
                    ]
                }
            ],
            "deleteToneEnum": [
                413,
                {
                    "where": [
                        408,
                        "ToneEnumBoolExp!"
                    ]
                }
            ],
            "deleteToneEnumByPk": [
                405,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "deleteTypeEnum": [
                431,
                {
                    "where": [
                        426,
                        "TypeEnumBoolExp!"
                    ]
                }
            ],
            "deleteTypeEnumByPk": [
                423,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "deleteUser": [
                449,
                {
                    "where": [
                        444,
                        "UserBoolExp!"
                    ]
                }
            ],
            "deleteUserByPk": [
                441,
                {
                    "userId": [
                        471,
                        "uuid!"
                    ]
                }
            ],
            "insertCategory": [
                12,
                {
                    "objects": [
                        9,
                        "[CategoryInsertInput!]!"
                    ],
                    "onConflict": [
                        14
                    ]
                }
            ],
            "insertCategoryOne": [
                2,
                {
                    "object": [
                        9,
                        "CategoryInsertInput!"
                    ],
                    "onConflict": [
                        14
                    ]
                }
            ],
            "insertChat": [
                46,
                {
                    "objects": [
                        41,
                        "[ChatInsertInput!]!"
                    ],
                    "onConflict": [
                        47
                    ]
                }
            ],
            "insertChatOne": [
                30,
                {
                    "object": [
                        41,
                        "ChatInsertInput!"
                    ],
                    "onConflict": [
                        47
                    ]
                }
            ],
            "insertChatbot": [
                120,
                {
                    "objects": [
                        117,
                        "[ChatbotInsertInput!]!"
                    ],
                    "onConflict": [
                        122
                    ]
                }
            ],
            "insertChatbotCategory": [
                91,
                {
                    "objects": [
                        86,
                        "[ChatbotCategoryInsertInput!]!"
                    ],
                    "onConflict": [
                        92
                    ]
                }
            ],
            "insertChatbotCategoryOne": [
                75,
                {
                    "object": [
                        86,
                        "ChatbotCategoryInsertInput!"
                    ],
                    "onConflict": [
                        92
                    ]
                }
            ],
            "insertChatbotOne": [
                70,
                {
                    "object": [
                        117,
                        "ChatbotInsertInput!"
                    ],
                    "onConflict": [
                        122
                    ]
                }
            ],
            "insertComplexityEnum": [
                146,
                {
                    "objects": [
                        143,
                        "[ComplexityEnumInsertInput!]!"
                    ],
                    "onConflict": [
                        147
                    ]
                }
            ],
            "insertComplexityEnumOne": [
                138,
                {
                    "object": [
                        143,
                        "ComplexityEnumInsertInput!"
                    ],
                    "onConflict": [
                        147
                    ]
                }
            ],
            "insertLengthEnum": [
                168,
                {
                    "objects": [
                        165,
                        "[LengthEnumInsertInput!]!"
                    ],
                    "onConflict": [
                        169
                    ]
                }
            ],
            "insertLengthEnumOne": [
                160,
                {
                    "object": [
                        165,
                        "LengthEnumInsertInput!"
                    ],
                    "onConflict": [
                        169
                    ]
                }
            ],
            "insertMessage": [
                191,
                {
                    "objects": [
                        186,
                        "[MessageInsertInput!]!"
                    ],
                    "onConflict": [
                        192
                    ]
                }
            ],
            "insertMessageOne": [
                178,
                {
                    "object": [
                        186,
                        "MessageInsertInput!"
                    ],
                    "onConflict": [
                        192
                    ]
                }
            ],
            "insertMessageTypeEnum": [
                207,
                {
                    "objects": [
                        204,
                        "[MessageTypeEnumInsertInput!]!"
                    ],
                    "onConflict": [
                        208
                    ]
                }
            ],
            "insertMessageTypeEnumOne": [
                199,
                {
                    "object": [
                        204,
                        "MessageTypeEnumInsertInput!"
                    ],
                    "onConflict": [
                        208
                    ]
                }
            ],
            "insertPreference": [
                236,
                {
                    "objects": [
                        231,
                        "[PreferenceInsertInput!]!"
                    ],
                    "onConflict": [
                        237
                    ]
                }
            ],
            "insertPreferenceOne": [
                220,
                {
                    "object": [
                        231,
                        "PreferenceInsertInput!"
                    ],
                    "onConflict": [
                        237
                    ]
                }
            ],
            "insertPrompt": [
                318,
                {
                    "objects": [
                        313,
                        "[PromptInsertInput!]!"
                    ],
                    "onConflict": [
                        320
                    ]
                }
            ],
            "insertPromptChatbot": [
                287,
                {
                    "objects": [
                        282,
                        "[PromptChatbotInsertInput!]!"
                    ],
                    "onConflict": [
                        288
                    ]
                }
            ],
            "insertPromptChatbotOne": [
                271,
                {
                    "object": [
                        282,
                        "PromptChatbotInsertInput!"
                    ],
                    "onConflict": [
                        288
                    ]
                }
            ],
            "insertPromptOne": [
                262,
                {
                    "object": [
                        313,
                        "PromptInsertInput!"
                    ],
                    "onConflict": [
                        320
                    ]
                }
            ],
            "insertPromptTypeEnum": [
                343,
                {
                    "objects": [
                        340,
                        "[PromptTypeEnumInsertInput!]!"
                    ],
                    "onConflict": [
                        344
                    ]
                }
            ],
            "insertPromptTypeEnumOne": [
                335,
                {
                    "object": [
                        340,
                        "PromptTypeEnumInsertInput!"
                    ],
                    "onConflict": [
                        344
                    ]
                }
            ],
            "insertThread": [
                379,
                {
                    "objects": [
                        374,
                        "[ThreadInsertInput!]!"
                    ],
                    "onConflict": [
                        381
                    ]
                }
            ],
            "insertThreadOne": [
                363,
                {
                    "object": [
                        374,
                        "ThreadInsertInput!"
                    ],
                    "onConflict": [
                        381
                    ]
                }
            ],
            "insertToneEnum": [
                413,
                {
                    "objects": [
                        410,
                        "[ToneEnumInsertInput!]!"
                    ],
                    "onConflict": [
                        414
                    ]
                }
            ],
            "insertToneEnumOne": [
                405,
                {
                    "object": [
                        410,
                        "ToneEnumInsertInput!"
                    ],
                    "onConflict": [
                        414
                    ]
                }
            ],
            "insertTypeEnum": [
                431,
                {
                    "objects": [
                        428,
                        "[TypeEnumInsertInput!]!"
                    ],
                    "onConflict": [
                        432
                    ]
                }
            ],
            "insertTypeEnumOne": [
                423,
                {
                    "object": [
                        428,
                        "TypeEnumInsertInput!"
                    ],
                    "onConflict": [
                        432
                    ]
                }
            ],
            "insertUser": [
                449,
                {
                    "objects": [
                        446,
                        "[UserInsertInput!]!"
                    ],
                    "onConflict": [
                        451
                    ]
                }
            ],
            "insertUserOne": [
                441,
                {
                    "object": [
                        446,
                        "UserInsertInput!"
                    ],
                    "onConflict": [
                        451
                    ]
                }
            ],
            "updateCategory": [
                12,
                {
                    "_inc": [
                        8
                    ],
                    "_set": [
                        18
                    ],
                    "where": [
                        6,
                        "CategoryBoolExp!"
                    ]
                }
            ],
            "updateCategoryByPk": [
                2,
                {
                    "_inc": [
                        8
                    ],
                    "_set": [
                        18
                    ],
                    "pkColumns": [
                        16,
                        "CategoryPkColumnsInput!"
                    ]
                }
            ],
            "updateCategoryMany": [
                12,
                {
                    "updates": [
                        26,
                        "[CategoryUpdates!]!"
                    ]
                }
            ],
            "updateChat": [
                46,
                {
                    "_inc": [
                        40
                    ],
                    "_set": [
                        51
                    ],
                    "where": [
                        38,
                        "ChatBoolExp!"
                    ]
                }
            ],
            "updateChatByPk": [
                30,
                {
                    "_inc": [
                        40
                    ],
                    "_set": [
                        51
                    ],
                    "pkColumns": [
                        49,
                        "ChatPkColumnsInput!"
                    ]
                }
            ],
            "updateChatMany": [
                46,
                {
                    "updates": [
                        63,
                        "[ChatUpdates!]!"
                    ]
                }
            ],
            "updateChatbot": [
                120,
                {
                    "_inc": [
                        116
                    ],
                    "_set": [
                        126
                    ],
                    "where": [
                        74,
                        "ChatbotBoolExp!"
                    ]
                }
            ],
            "updateChatbotByPk": [
                70,
                {
                    "_inc": [
                        116
                    ],
                    "_set": [
                        126
                    ],
                    "pkColumns": [
                        124,
                        "ChatbotPkColumnsInput!"
                    ]
                }
            ],
            "updateChatbotCategory": [
                91,
                {
                    "_inc": [
                        85
                    ],
                    "_set": [
                        96
                    ],
                    "where": [
                        83,
                        "ChatbotCategoryBoolExp!"
                    ]
                }
            ],
            "updateChatbotCategoryByPk": [
                75,
                {
                    "_inc": [
                        85
                    ],
                    "_set": [
                        96
                    ],
                    "pkColumns": [
                        94,
                        "ChatbotCategoryPkColumnsInput!"
                    ]
                }
            ],
            "updateChatbotCategoryMany": [
                91,
                {
                    "updates": [
                        108,
                        "[ChatbotCategoryUpdates!]!"
                    ]
                }
            ],
            "updateChatbotMany": [
                120,
                {
                    "updates": [
                        134,
                        "[ChatbotUpdates!]!"
                    ]
                }
            ],
            "updateComplexityEnum": [
                146,
                {
                    "_set": [
                        151
                    ],
                    "where": [
                        141,
                        "ComplexityEnumBoolExp!"
                    ]
                }
            ],
            "updateComplexityEnumByPk": [
                138,
                {
                    "_set": [
                        151
                    ],
                    "pkColumns": [
                        149,
                        "ComplexityEnumPkColumnsInput!"
                    ]
                }
            ],
            "updateComplexityEnumMany": [
                146,
                {
                    "updates": [
                        155,
                        "[ComplexityEnumUpdates!]!"
                    ]
                }
            ],
            "updateLengthEnum": [
                168,
                {
                    "_set": [
                        173
                    ],
                    "where": [
                        163,
                        "LengthEnumBoolExp!"
                    ]
                }
            ],
            "updateLengthEnumByPk": [
                160,
                {
                    "_set": [
                        173
                    ],
                    "pkColumns": [
                        171,
                        "LengthEnumPkColumnsInput!"
                    ]
                }
            ],
            "updateLengthEnumMany": [
                168,
                {
                    "updates": [
                        177,
                        "[LengthEnumUpdates!]!"
                    ]
                }
            ],
            "updateMessage": [
                191,
                {
                    "_set": [
                        196
                    ],
                    "where": [
                        184,
                        "MessageBoolExp!"
                    ]
                }
            ],
            "updateMessageByPk": [
                178,
                {
                    "_set": [
                        196
                    ],
                    "pkColumns": [
                        194,
                        "MessagePkColumnsInput!"
                    ]
                }
            ],
            "updateMessageMany": [
                191,
                {
                    "updates": [
                        218,
                        "[MessageUpdates!]!"
                    ]
                }
            ],
            "updateMessageTypeEnum": [
                207,
                {
                    "_set": [
                        212
                    ],
                    "where": [
                        202,
                        "MessageTypeEnumBoolExp!"
                    ]
                }
            ],
            "updateMessageTypeEnumByPk": [
                199,
                {
                    "_set": [
                        212
                    ],
                    "pkColumns": [
                        210,
                        "MessageTypeEnumPkColumnsInput!"
                    ]
                }
            ],
            "updateMessageTypeEnumMany": [
                207,
                {
                    "updates": [
                        216,
                        "[MessageTypeEnumUpdates!]!"
                    ]
                }
            ],
            "updatePreference": [
                236,
                {
                    "_inc": [
                        230
                    ],
                    "_set": [
                        243
                    ],
                    "where": [
                        228,
                        "PreferenceBoolExp!"
                    ]
                }
            ],
            "updatePreferenceByPk": [
                220,
                {
                    "_inc": [
                        230
                    ],
                    "_set": [
                        243
                    ],
                    "pkColumns": [
                        239,
                        "PreferencePkColumnsInput!"
                    ]
                }
            ],
            "updatePreferenceMany": [
                236,
                {
                    "updates": [
                        255,
                        "[PreferenceUpdates!]!"
                    ]
                }
            ],
            "updatePrompt": [
                318,
                {
                    "_inc": [
                        312
                    ],
                    "_set": [
                        324
                    ],
                    "where": [
                        270,
                        "PromptBoolExp!"
                    ]
                }
            ],
            "updatePromptByPk": [
                262,
                {
                    "_inc": [
                        312
                    ],
                    "_set": [
                        324
                    ],
                    "pkColumns": [
                        322,
                        "PromptPkColumnsInput!"
                    ]
                }
            ],
            "updatePromptChatbot": [
                287,
                {
                    "_inc": [
                        281
                    ],
                    "_set": [
                        292
                    ],
                    "where": [
                        279,
                        "PromptChatbotBoolExp!"
                    ]
                }
            ],
            "updatePromptChatbotByPk": [
                271,
                {
                    "_inc": [
                        281
                    ],
                    "_set": [
                        292
                    ],
                    "pkColumns": [
                        290,
                        "PromptChatbotPkColumnsInput!"
                    ]
                }
            ],
            "updatePromptChatbotMany": [
                287,
                {
                    "updates": [
                        304,
                        "[PromptChatbotUpdates!]!"
                    ]
                }
            ],
            "updatePromptMany": [
                318,
                {
                    "updates": [
                        354,
                        "[PromptUpdates!]!"
                    ]
                }
            ],
            "updatePromptTypeEnum": [
                343,
                {
                    "_set": [
                        348
                    ],
                    "where": [
                        338,
                        "PromptTypeEnumBoolExp!"
                    ]
                }
            ],
            "updatePromptTypeEnumByPk": [
                335,
                {
                    "_set": [
                        348
                    ],
                    "pkColumns": [
                        346,
                        "PromptTypeEnumPkColumnsInput!"
                    ]
                }
            ],
            "updatePromptTypeEnumMany": [
                343,
                {
                    "updates": [
                        352,
                        "[PromptTypeEnumUpdates!]!"
                    ]
                }
            ],
            "updateThread": [
                379,
                {
                    "_inc": [
                        373
                    ],
                    "_set": [
                        385
                    ],
                    "where": [
                        371,
                        "ThreadBoolExp!"
                    ]
                }
            ],
            "updateThreadByPk": [
                363,
                {
                    "_inc": [
                        373
                    ],
                    "_set": [
                        385
                    ],
                    "pkColumns": [
                        383,
                        "ThreadPkColumnsInput!"
                    ]
                }
            ],
            "updateThreadMany": [
                379,
                {
                    "updates": [
                        397,
                        "[ThreadUpdates!]!"
                    ]
                }
            ],
            "updateToneEnum": [
                413,
                {
                    "_set": [
                        418
                    ],
                    "where": [
                        408,
                        "ToneEnumBoolExp!"
                    ]
                }
            ],
            "updateToneEnumByPk": [
                405,
                {
                    "_set": [
                        418
                    ],
                    "pkColumns": [
                        416,
                        "ToneEnumPkColumnsInput!"
                    ]
                }
            ],
            "updateToneEnumMany": [
                413,
                {
                    "updates": [
                        422,
                        "[ToneEnumUpdates!]!"
                    ]
                }
            ],
            "updateTypeEnum": [
                431,
                {
                    "_set": [
                        436
                    ],
                    "where": [
                        426,
                        "TypeEnumBoolExp!"
                    ]
                }
            ],
            "updateTypeEnumByPk": [
                423,
                {
                    "_set": [
                        436
                    ],
                    "pkColumns": [
                        434,
                        "TypeEnumPkColumnsInput!"
                    ]
                }
            ],
            "updateTypeEnumMany": [
                431,
                {
                    "updates": [
                        440,
                        "[TypeEnumUpdates!]!"
                    ]
                }
            ],
            "updateUser": [
                449,
                {
                    "_set": [
                        455
                    ],
                    "where": [
                        444,
                        "UserBoolExp!"
                    ]
                }
            ],
            "updateUserByPk": [
                441,
                {
                    "_set": [
                        455
                    ],
                    "pkColumns": [
                        453,
                        "UserPkColumnsInput!"
                    ]
                }
            ],
            "updateUserMany": [
                449,
                {
                    "updates": [
                        459,
                        "[UserUpdates!]!"
                    ]
                }
            ],
            "__typename": [
                361
            ]
        },
        "Subscription": {
            "category": [
                2,
                {
                    "distinctOn": [
                        17,
                        "[CategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        15,
                        "[CategoryOrderBy!]"
                    ],
                    "where": [
                        6
                    ]
                }
            ],
            "categoryAggregate": [
                3,
                {
                    "distinctOn": [
                        17,
                        "[CategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        15,
                        "[CategoryOrderBy!]"
                    ],
                    "where": [
                        6
                    ]
                }
            ],
            "categoryByPk": [
                2,
                {
                    "categoryId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "categoryStream": [
                2,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        22,
                        "[CategoryStreamCursorInput]!"
                    ],
                    "where": [
                        6
                    ]
                }
            ],
            "chat": [
                30,
                {
                    "distinctOn": [
                        50,
                        "[ChatSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        48,
                        "[ChatOrderBy!]"
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "chatAggregate": [
                31,
                {
                    "distinctOn": [
                        50,
                        "[ChatSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        48,
                        "[ChatOrderBy!]"
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "chatByPk": [
                30,
                {
                    "chatId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "chatStream": [
                30,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        58,
                        "[ChatStreamCursorInput]!"
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "chatbot": [
                70,
                {
                    "distinctOn": [
                        125,
                        "[ChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        123,
                        "[ChatbotOrderBy!]"
                    ],
                    "where": [
                        74
                    ]
                }
            ],
            "chatbotAggregate": [
                71,
                {
                    "distinctOn": [
                        125,
                        "[ChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        123,
                        "[ChatbotOrderBy!]"
                    ],
                    "where": [
                        74
                    ]
                }
            ],
            "chatbotByPk": [
                70,
                {
                    "chatbotId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "chatbotCategory": [
                75,
                {
                    "distinctOn": [
                        95,
                        "[ChatbotCategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        93,
                        "[ChatbotCategoryOrderBy!]"
                    ],
                    "where": [
                        83
                    ]
                }
            ],
            "chatbotCategoryAggregate": [
                76,
                {
                    "distinctOn": [
                        95,
                        "[ChatbotCategorySelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        93,
                        "[ChatbotCategoryOrderBy!]"
                    ],
                    "where": [
                        83
                    ]
                }
            ],
            "chatbotCategoryByPk": [
                75,
                {
                    "categoryId": [
                        158,
                        "Int!"
                    ],
                    "chatbotId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "chatbotCategoryStream": [
                75,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        103,
                        "[ChatbotCategoryStreamCursorInput]!"
                    ],
                    "where": [
                        83
                    ]
                }
            ],
            "chatbotStream": [
                70,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        130,
                        "[ChatbotStreamCursorInput]!"
                    ],
                    "where": [
                        74
                    ]
                }
            ],
            "complexityEnum": [
                138,
                {
                    "distinctOn": [
                        150,
                        "[ComplexityEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        148,
                        "[ComplexityEnumOrderBy!]"
                    ],
                    "where": [
                        141
                    ]
                }
            ],
            "complexityEnumAggregate": [
                139,
                {
                    "distinctOn": [
                        150,
                        "[ComplexityEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        148,
                        "[ComplexityEnumOrderBy!]"
                    ],
                    "where": [
                        141
                    ]
                }
            ],
            "complexityEnumByPk": [
                138,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "complexityEnumStream": [
                138,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        152,
                        "[ComplexityEnumStreamCursorInput]!"
                    ],
                    "where": [
                        141
                    ]
                }
            ],
            "lengthEnum": [
                160,
                {
                    "distinctOn": [
                        172,
                        "[LengthEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        170,
                        "[LengthEnumOrderBy!]"
                    ],
                    "where": [
                        163
                    ]
                }
            ],
            "lengthEnumAggregate": [
                161,
                {
                    "distinctOn": [
                        172,
                        "[LengthEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        170,
                        "[LengthEnumOrderBy!]"
                    ],
                    "where": [
                        163
                    ]
                }
            ],
            "lengthEnumByPk": [
                160,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "lengthEnumStream": [
                160,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        174,
                        "[LengthEnumStreamCursorInput]!"
                    ],
                    "where": [
                        163
                    ]
                }
            ],
            "message": [
                178,
                {
                    "distinctOn": [
                        195,
                        "[MessageSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        193,
                        "[MessageOrderBy!]"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "messageAggregate": [
                179,
                {
                    "distinctOn": [
                        195,
                        "[MessageSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        193,
                        "[MessageOrderBy!]"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "messageByPk": [
                178,
                {
                    "messageId": [
                        471,
                        "uuid!"
                    ]
                }
            ],
            "messageStream": [
                178,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        197,
                        "[MessageStreamCursorInput]!"
                    ],
                    "where": [
                        184
                    ]
                }
            ],
            "messageTypeEnum": [
                199,
                {
                    "distinctOn": [
                        211,
                        "[MessageTypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        209,
                        "[MessageTypeEnumOrderBy!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "messageTypeEnumAggregate": [
                200,
                {
                    "distinctOn": [
                        211,
                        "[MessageTypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        209,
                        "[MessageTypeEnumOrderBy!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "messageTypeEnumByPk": [
                199,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "messageTypeEnumStream": [
                199,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        213,
                        "[MessageTypeEnumStreamCursorInput]!"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "preference": [
                220,
                {
                    "distinctOn": [
                        240,
                        "[PreferenceSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        238,
                        "[PreferenceOrderBy!]"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "preferenceAggregate": [
                221,
                {
                    "distinctOn": [
                        240,
                        "[PreferenceSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        238,
                        "[PreferenceOrderBy!]"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "preferenceByPk": [
                220,
                {
                    "preferenceId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "preferenceStream": [
                220,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        250,
                        "[PreferenceStreamCursorInput]!"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "prompt": [
                262,
                {
                    "distinctOn": [
                        323,
                        "[PromptSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        321,
                        "[PromptOrderBy!]"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "promptAggregate": [
                263,
                {
                    "distinctOn": [
                        323,
                        "[PromptSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        321,
                        "[PromptOrderBy!]"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "promptByPk": [
                262,
                {
                    "promptId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "promptChatbot": [
                271,
                {
                    "distinctOn": [
                        291,
                        "[PromptChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        289,
                        "[PromptChatbotOrderBy!]"
                    ],
                    "where": [
                        279
                    ]
                }
            ],
            "promptChatbotAggregate": [
                272,
                {
                    "distinctOn": [
                        291,
                        "[PromptChatbotSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        289,
                        "[PromptChatbotOrderBy!]"
                    ],
                    "where": [
                        279
                    ]
                }
            ],
            "promptChatbotByPk": [
                271,
                {
                    "chabotId": [
                        158,
                        "Int!"
                    ],
                    "promptId": [
                        158,
                        "Int!"
                    ]
                }
            ],
            "promptChatbotStream": [
                271,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        299,
                        "[PromptChatbotStreamCursorInput]!"
                    ],
                    "where": [
                        279
                    ]
                }
            ],
            "promptStream": [
                262,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        331,
                        "[PromptStreamCursorInput]!"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "promptTypeEnum": [
                335,
                {
                    "distinctOn": [
                        347,
                        "[PromptTypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        345,
                        "[PromptTypeEnumOrderBy!]"
                    ],
                    "where": [
                        338
                    ]
                }
            ],
            "promptTypeEnumAggregate": [
                336,
                {
                    "distinctOn": [
                        347,
                        "[PromptTypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        345,
                        "[PromptTypeEnumOrderBy!]"
                    ],
                    "where": [
                        338
                    ]
                }
            ],
            "promptTypeEnumByPk": [
                335,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "promptTypeEnumStream": [
                335,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        349,
                        "[PromptTypeEnumStreamCursorInput]!"
                    ],
                    "where": [
                        338
                    ]
                }
            ],
            "thread": [
                363,
                {
                    "distinctOn": [
                        384,
                        "[ThreadSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        382,
                        "[ThreadOrderBy!]"
                    ],
                    "where": [
                        371
                    ]
                }
            ],
            "threadAggregate": [
                364,
                {
                    "distinctOn": [
                        384,
                        "[ThreadSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        382,
                        "[ThreadOrderBy!]"
                    ],
                    "where": [
                        371
                    ]
                }
            ],
            "threadByPk": [
                363,
                {
                    "threadId": [
                        471,
                        "uuid!"
                    ]
                }
            ],
            "threadStream": [
                363,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        392,
                        "[ThreadStreamCursorInput]!"
                    ],
                    "where": [
                        371
                    ]
                }
            ],
            "toneEnum": [
                405,
                {
                    "distinctOn": [
                        417,
                        "[ToneEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        415,
                        "[ToneEnumOrderBy!]"
                    ],
                    "where": [
                        408
                    ]
                }
            ],
            "toneEnumAggregate": [
                406,
                {
                    "distinctOn": [
                        417,
                        "[ToneEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        415,
                        "[ToneEnumOrderBy!]"
                    ],
                    "where": [
                        408
                    ]
                }
            ],
            "toneEnumByPk": [
                405,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "toneEnumStream": [
                405,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        419,
                        "[ToneEnumStreamCursorInput]!"
                    ],
                    "where": [
                        408
                    ]
                }
            ],
            "typeEnum": [
                423,
                {
                    "distinctOn": [
                        435,
                        "[TypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        433,
                        "[TypeEnumOrderBy!]"
                    ],
                    "where": [
                        426
                    ]
                }
            ],
            "typeEnumAggregate": [
                424,
                {
                    "distinctOn": [
                        435,
                        "[TypeEnumSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        433,
                        "[TypeEnumOrderBy!]"
                    ],
                    "where": [
                        426
                    ]
                }
            ],
            "typeEnumByPk": [
                423,
                {
                    "value": [
                        361,
                        "String!"
                    ]
                }
            ],
            "typeEnumStream": [
                423,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        437,
                        "[TypeEnumStreamCursorInput]!"
                    ],
                    "where": [
                        426
                    ]
                }
            ],
            "user": [
                441,
                {
                    "distinctOn": [
                        454,
                        "[UserSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        452,
                        "[UserOrderBy!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "userAggregate": [
                442,
                {
                    "distinctOn": [
                        454,
                        "[UserSelectColumn!]"
                    ],
                    "limit": [
                        158
                    ],
                    "offset": [
                        158
                    ],
                    "orderBy": [
                        452,
                        "[UserOrderBy!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "userByPk": [
                441,
                {
                    "userId": [
                        471,
                        "uuid!"
                    ]
                }
            ],
            "userStream": [
                441,
                {
                    "batchSize": [
                        158,
                        "Int!"
                    ],
                    "cursor": [
                        456,
                        "[UserStreamCursorInput]!"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "__typename": [
                361
            ]
        }
    }
}