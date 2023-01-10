db.createUser(
    {
        user: 'admin',
        pwd: 'SuperSecret',
        roles: [
            {
                role: 'readWrite',
                db: 'api'
            },
            {
                role: 'readWrite',
                db: 'admin'
            }
        ],
    }
);

db.auth('admin', 'SuperSecret')

db = db.getSiblingDB('api')

db.createCollection('controllers');

db.controllers.insertMany([
    {
        "controller_id": "facebook.com",
        "controller_name": "Facebook.com",
        "automation": {
            "format": "automa",
            "version": "0.1",
            "definition": {
                "extVersion": "1.18.1",
                "name": "Facebook DSAR",
                "verified": true,
                "id": "HHT4_mPC6X00mQ8uMQi97",
                "icon": "riGlobalLine",
                "table": [],
                "version": "1.18.1",
                "drawflow": {
                    "nodes": [
                        {
                            "computedPosition": {
                                "x": 96,
                                "y": 97,
                                "z": 0
                            },
                            "data": {
                                "activeInInput": false,
                                "contextMenuName": "",
                                "contextTypes": [],
                                "date": "",
                                "days": [],
                                "delay": 5,
                                "description": "",
                                "disableBlock": false,
                                "interval": 60,
                                "isUrlRegex": false,
                                "observeElement": {
                                    "baseElOptions": {
                                        "attributeFilter": [],
                                        "attributes": false,
                                        "characterData": false,
                                        "childList": true,
                                        "subtree": false
                                    },
                                    "baseSelector": "",
                                    "matchPattern": "",
                                    "selector": "",
                                    "targetOptions": {
                                        "attributeFilter": [],
                                        "attributes": false,
                                        "characterData": false,
                                        "childList": true,
                                        "subtree": false
                                    }
                                },
                                "shortcut": "",
                                "time": "00:00",
                                "type": "manual",
                                "url": ""
                            },
                            "dimensions": {
                                "width": 192,
                                "height": 72
                            },
                            "handleBounds": {
                                "source": [
                                    {
                                        "id": "5oRquIw_AmscZUoLzCAdL-output-1",
                                        "position": "right",
                                        "x": 196.00006236432205,
                                        "y": 27.999995258758286,
                                        "width": 16,
                                        "height": 16
                                    }
                                ]
                            },
                            "id": "5oRquIw_AmscZUoLzCAdL",
                            "label": "trigger",
                            "position": {
                                "x": 96,
                                "y": 97
                            },
                            "selected": false,
                            "type": "BlockBasic"
                        },
                        {
                            "computedPosition": {
                                "x": 388,
                                "y": 97,
                                "z": 0
                            },
                            "data": {
                                "active": false,
                                "customUserAgent": false,
                                "description": "facebook.com/dyi/",
                                "disableBlock": false,
                                "inGroup": false,
                                "onError": {
                                    "dataToInsert": [],
                                    "enable": false,
                                    "insertData": false,
                                    "retry": false,
                                    "retryInterval": 2,
                                    "retryTimes": 1,
                                    "toDo": "error"
                                },
                                "updatePrevTab": false,
                                "url": "https://www.facebook.com/dyi/",
                                "userAgent": "",
                                "waitTabLoaded": true
                            },
                            "dimensions": {
                                "width": 192,
                                "height": 72
                            },
                            "handleBounds": {
                                "source": [
                                    {
                                        "id": "ZDnOyReNGu2LvF0eikrVj-output-1",
                                        "position": "right",
                                        "x": 196.00006236432205,
                                        "y": 27.999995258758286,
                                        "width": 16,
                                        "height": 16
                                    }
                                ],
                                "target": [
                                    {
                                        "id": "ZDnOyReNGu2LvF0eikrVj-input-1",
                                        "position": "left",
                                        "x": -20.000010263829353,
                                        "y": 27.999995258758286,
                                        "width": 16,
                                        "height": 16
                                    }
                                ]
                            },
                            "id": "ZDnOyReNGu2LvF0eikrVj",
                            "label": "new-tab",
                            "position": {
                                "x": 388,
                                "y": 97
                            },
                            "selected": false,
                            "type": "BlockBasic"
                        },
                        {
                            "computedPosition": {
                                "x": 680,
                                "y": 36,
                                "z": 0
                            },
                            "data": {
                                "description": "Select Format",
                                "disableBlock": false,
                                "findBy": "cssSelector",
                                "markEl": true,
                                "multiple": false,
                                "onError": {
                                    "dataToInsert": [],
                                    "enable": false,
                                    "insertData": false,
                                    "retry": false,
                                    "retryInterval": 2,
                                    "retryTimes": 1,
                                    "toDo": "error"
                                },
                                "selector": "label[aria-label=\"Format\"]",
                                "settings": {
                                    "debugMode": false
                                },
                                "waitForSelector": true,
                                "waitSelectorTimeout": 5000
                            },
                            "dimensions": {
                                "width": 192,
                                "height": 72
                            },
                            "handleBounds": {
                                "source": [
                                    {
                                        "id": "faAsDA3AJIVpqI990xxwM-output-1",
                                        "position": "right",
                                        "x": 196.00006103515625,
                                        "y": 27.999979654947918,
                                        "width": 16,
                                        "height": 16
                                    }
                                ],
                                "target": [
                                    {
                                        "id": "faAsDA3AJIVpqI990xxwM-input-1",
                                        "position": "left",
                                        "x": -20,
                                        "y": 27.999979654947918,
                                        "width": 16,
                                        "height": 16
                                    }
                                ]
                            },
                            "id": "faAsDA3AJIVpqI990xxwM",
                            "label": "event-click",
                            "position": {
                                "x": 680,
                                "y": 36
                            },
                            "selected": false,
                            "type": "BlockBasic"
                        },
                        {
                            "computedPosition": {
                                "x": 972,
                                "y": 36,
                                "z": 0
                            },
                            "data": {
                                "description": " Select JSON",
                                "disableBlock": false,
                                "findBy": "cssSelector",
                                "markEl": false,
                                "multiple": false,
                                "selector": "div[aria-selected=false][role=option]",
                                "waitForSelector": true,
                                "waitSelectorTimeout": 5000
                            },
                            "dimensions": {
                                "width": 192,
                                "height": 72
                            },
                            "handleBounds": {
                                "source": [
                                    {
                                        "id": "s_42XIl3GJlgnlqeyZ73t-output-1",
                                        "position": "right",
                                        "x": 196.00006103515625,
                                        "y": 27.999979654947918,
                                        "width": 16,
                                        "height": 16
                                    }
                                ],
                                "target": [
                                    {
                                        "id": "s_42XIl3GJlgnlqeyZ73t-input-1",
                                        "position": "left",
                                        "x": -20,
                                        "y": 27.999979654947918,
                                        "width": 16,
                                        "height": 16
                                    }
                                ]
                            },
                            "id": "s_42XIl3GJlgnlqeyZ73t",
                            "label": "event-click",
                            "position": {
                                "x": 972,
                                "y": 36
                            },
                            "selected": false,
                            "type": "BlockBasic"
                        },
                        {
                            "computedPosition": {
                                "x": 1264,
                                "y": 36,
                                "z": 0
                            },
                            "data": {
                                "description": " Select Date range",
                                "disableBlock": false,
                                "findBy": "cssSelector",
                                "markEl": false,
                                "multiple": false,
                                "selector": "label[aria-label=\"Date range (required)\"]",
                                "waitForSelector": true,
                                "waitSelectorTimeout": 5000
                            },
                            "dimensions": {
                                "width": 192,
                                "height": 72
                            },
                            "handleBounds": {
                                "source": [
                                    {
                                        "id": "cc102a07-0062-414c-8d9e-d9d32c69bf88-output-1",
                                        "position": "right",
                                        "x": 195.99995930989584,
                                        "y": 27.999979654947918,
                                        "width": 16,
                                        "height": 16
                                    }
                                ],
                                "target": [
                                    {
                                        "id": "cc102a07-0062-414c-8d9e-d9d32c69bf88-input-1",
                                        "position": "left",
                                        "x": -20,
                                        "y": 27.999979654947918,
                                        "width": 16,
                                        "height": 16
                                    }
                                ]
                            },
                            "id": "cc102a07-0062-414c-8d9e-d9d32c69bf88",
                            "label": "event-click",
                            "position": {
                                "x": 1264,
                                "y": 36
                            },
                            "selected": false,
                            "type": "BlockBasic"
                        },
                        {
                            "computedPosition": {
                                "x": 1848,
                                "y": 36,
                                "z": 0
                            },
                            "data": {
                                "description": "Request Download",
                                "disableBlock": false,
                                "findBy": "cssSelector",
                                "markEl": false,
                                "multiple": false,
                                "selector": "div[aria-label=\"Request a download\"]",
                                "waitForSelector": true,
                                "waitSelectorTimeout": 5000
                            },
                            "dimensions": {
                                "width": 192,
                                "height": 72
                            },
                            "handleBounds": {
                                "source": [
                                    {
                                        "id": "fd7f1687-e768-4a5e-8ae9-9c87ad24ae39-output-1",
                                        "position": "right",
                                        "x": 195.99995930989584,
                                        "y": 27.999979654947918,
                                        "width": 16,
                                        "height": 16
                                    }
                                ],
                                "target": [
                                    {
                                        "id": "fd7f1687-e768-4a5e-8ae9-9c87ad24ae39-input-1",
                                        "position": "left",
                                        "x": -20,
                                        "y": 27.999979654947918,
                                        "width": 16,
                                        "height": 16
                                    }
                                ]
                            },
                            "id": "fd7f1687-e768-4a5e-8ae9-9c87ad24ae39",
                            "label": "event-click",
                            "position": {
                                "x": 1848,
                                "y": 36
                            },
                            "selected": false,
                            "type": "BlockBasic"
                        },
                        {
                            "computedPosition": {
                                "x": 1556,
                                "y": 36,
                                "z": 0
                            },
                            "data": {
                                "code": "let divs = document.getElementsByTagName('span');\nfor(let i=0;i<divs.length;i++){\n  if(divs[i].innerHTML == 'All time'){\n    divs[i].click()\n    break;\n  }\n}\n\nautomaNextBlock()",
                                "description": "Select 'All time'\n",
                                "disableBlock": false,
                                "everyNewTab": false,
                                "preloadScripts": [],
                                "runBeforeLoad": false,
                                "timeout": 20000
                            },
                            "dimensions": {
                                "width": 192,
                                "height": 72
                            },
                            "handleBounds": {
                                "source": [
                                    {
                                        "id": "5vrvd7g-output-1",
                                        "position": "right",
                                        "x": 195.999755859375,
                                        "y": 27.999979654947918,
                                        "width": 16,
                                        "height": 16
                                    }
                                ],
                                "target": [
                                    {
                                        "id": "5vrvd7g-input-1",
                                        "position": "left",
                                        "x": -20,
                                        "y": 27.999979654947918,
                                        "width": 16,
                                        "height": 16
                                    }
                                ]
                            },
                            "id": "5vrvd7g",
                            "label": "javascript-code",
                            "position": {
                                "x": 1556,
                                "y": 36
                            },
                            "selected": false,
                            "type": "BlockBasic"
                        },
                        {
                            "computedPosition": {
                                "x": 680,
                                "y": 158,
                                "z": 1000
                            },
                            "data": {
                                "code": "const event = new CustomEvent( '__js-event__', {\n  'detail': {\n    'type': 'to_active',\n    'data': { 'workflow_state': 'started' }\n  }\n});\nwindow.dispatchEvent(event);",
                                "description": "",
                                "disableBlock": false,
                                "everyNewTab": false,
                                "preloadScripts": [],
                                "runBeforeLoad": false,
                                "timeout": 20000
                            },
                            "dimensions": {
                                "width": 192,
                                "height": 72
                            },
                            "handleBounds": {
                                "source": [
                                    {
                                        "id": "m5en8tm-output-1",
                                        "position": "right",
                                        "x": 196.00001449584963,
                                        "y": 28.000014209747317,
                                        "width": 16,
                                        "height": 16
                                    }
                                ],
                                "target": [
                                    {
                                        "id": "m5en8tm-input-1",
                                        "position": "left",
                                        "x": -19.99994945526123,
                                        "y": 28.000014209747317,
                                        "width": 16,
                                        "height": 16
                                    }
                                ]
                            },
                            "id": "m5en8tm",
                            "label": "javascript-code",
                            "position": {
                                "x": 680,
                                "y": 158
                            },
                            "selected": true,
                            "type": "BlockBasic"
                        },
                        {
                            "type": "BlockBasic",
                            "dimensions": {
                                "width": 192,
                                "height": 72
                            },
                            "handleBounds": {
                                "source": [
                                    {
                                        "id": "bm9a669-output-1",
                                        "position": "right",
                                        "x": 196.00001449584963,
                                        "y": 28.000014209747317,
                                        "width": 16,
                                        "height": 16
                                    }
                                ],
                                "target": [
                                    {
                                        "id": "bm9a669-input-1",
                                        "position": "left",
                                        "x": -19.99994945526123,
                                        "y": 28.000014209747317,
                                        "width": 16,
                                        "height": 16
                                    }
                                ]
                            },
                            "computedPosition": {
                                "x": 2140,
                                "y": 36,
                                "z": 0
                            },
                            "data": {
                                "code": "const event = new CustomEvent( '__js-event__', {\n  'detail': {\n    'type': 'to_active',\n    'data': { 'workflow_state': 'completed' }\n  }\n});\nwindow.dispatchEvent(event);",
                                "description": "Send completed signal",
                                "disableBlock": false,
                                "everyNewTab": false,
                                "preloadScripts": [],
                                "runBeforeLoad": false,
                                "timeout": 20000
                            },
                            "label": "javascript-code",
                            "id": "bm9a669",
                            "selected": false,
                            "position": {
                                "x": 2140,
                                "y": 36
                            }
                        },
                        {
                            "type": "BlockBasic",
                            "dimensions": {
                                "width": 192,
                                "height": 72
                            },
                            "handleBounds": {
                                "source": [
                                    {
                                        "id": "hrok4jm-output-1",
                                        "position": "right",
                                        "x": 196.00001449584963,
                                        "y": 28.000014209747317,
                                        "width": 16,
                                        "height": 16
                                    }
                                ],
                                "target": [
                                    {
                                        "id": "hrok4jm-input-1",
                                        "position": "left",
                                        "x": -19.99994945526123,
                                        "y": 28.000014209747317,
                                        "width": 16,
                                        "height": 16
                                    }
                                ]
                            },
                            "computedPosition": {
                                "x": 2432,
                                "y": 36,
                                "z": 0
                            },
                            "data": {
                                "activeTab": true,
                                "allWindows": false,
                                "closeType": "tab",
                                "description": "",
                                "disableBlock": false,
                                "url": ""
                            },
                            "label": "close-tab",
                            "id": "hrok4jm",
                            "selected": false,
                            "position": {
                                "x": 2432,
                                "y": 36
                            }
                        }
                    ],
                    "edges": [
                        {
                            "id": "vueflow__edge-5oRquIw_AmscZUoLzCAdL-output-1-ZDnOyReNGu2LvF0eikrVj-input-1",
                            "class": "source-5oRquIw_AmscZUoLzCAdL-output-1 target-ZDnOyReNGu2LvF0eikrVj-input-1",
                            "markerEnd": "",
                            "selectable": true,
                            "source": "5oRquIw_AmscZUoLzCAdL",
                            "sourceHandle": "5oRquIw_AmscZUoLzCAdL-output-1",
                            "sourceX": 0,
                            "sourceY": 0,
                            "target": "ZDnOyReNGu2LvF0eikrVj",
                            "targetHandle": "ZDnOyReNGu2LvF0eikrVj-input-1",
                            "targetX": 0,
                            "targetY": 0,
                            "type": "default",
                            "updatable": true,
                            "z": 0
                        },
                        {
                            "id": "vueflow__edge-ZDnOyReNGu2LvF0eikrVj-output-1-faAsDA3AJIVpqI990xxwM-input-1",
                            "class": "source-ZDnOyReNGu2LvF0eikrVj-output-1 target-faAsDA3AJIVpqI990xxwM-input-1",
                            "markerEnd": "",
                            "selectable": true,
                            "source": "ZDnOyReNGu2LvF0eikrVj",
                            "sourceHandle": "ZDnOyReNGu2LvF0eikrVj-output-1",
                            "sourceX": 0,
                            "sourceY": 0,
                            "target": "faAsDA3AJIVpqI990xxwM",
                            "targetHandle": "faAsDA3AJIVpqI990xxwM-input-1",
                            "targetX": 0,
                            "targetY": 0,
                            "type": "default",
                            "updatable": true,
                            "z": 0
                        },
                        {
                            "id": "vueflow__edge-faAsDA3AJIVpqI990xxwM-output-1-s_42XIl3GJlgnlqeyZ73t-input-1",
                            "class": "source-faAsDA3AJIVpqI990xxwM-output-1 target-s_42XIl3GJlgnlqeyZ73t-input-1",
                            "markerEnd": "",
                            "selectable": true,
                            "source": "faAsDA3AJIVpqI990xxwM",
                            "sourceHandle": "faAsDA3AJIVpqI990xxwM-output-1",
                            "sourceX": 0,
                            "sourceY": 0,
                            "target": "s_42XIl3GJlgnlqeyZ73t",
                            "targetHandle": "s_42XIl3GJlgnlqeyZ73t-input-1",
                            "targetX": 0,
                            "targetY": 0,
                            "type": "default",
                            "updatable": true,
                            "z": 0
                        },
                        {
                            "id": "vueflow__edge-s_42XIl3GJlgnlqeyZ73t-output-1-cc102a07-0062-414c-8d9e-d9d32c69bf88-input-1",
                            "class": "source-s_42XIl3GJlgnlqeyZ73t-output-1 target-cc102a07-0062-414c-8d9e-d9d32c69bf88-input-1",
                            "markerEnd": "",
                            "selectable": true,
                            "source": "s_42XIl3GJlgnlqeyZ73t",
                            "sourceHandle": "s_42XIl3GJlgnlqeyZ73t-output-1",
                            "sourceX": 0,
                            "sourceY": 0,
                            "target": "cc102a07-0062-414c-8d9e-d9d32c69bf88",
                            "targetHandle": "cc102a07-0062-414c-8d9e-d9d32c69bf88-input-1",
                            "targetX": 0,
                            "targetY": 0,
                            "type": "default",
                            "updatable": true,
                            "z": 0
                        },
                        {
                            "id": "vueflow__edge-cc102a07-0062-414c-8d9e-d9d32c69bf88cc102a07-0062-414c-8d9e-d9d32c69bf88-output-1-5vrvd7g5vrvd7g-input-1",
                            "class": "source-cc102a07-0062-414c-8d9e-d9d32c69bf88-output-1 target-5vrvd7g-input-1",
                            "markerEnd": "",
                            "selectable": true,
                            "source": "cc102a07-0062-414c-8d9e-d9d32c69bf88",
                            "sourceHandle": "cc102a07-0062-414c-8d9e-d9d32c69bf88-output-1",
                            "sourceX": 0,
                            "sourceY": 0,
                            "target": "5vrvd7g",
                            "targetHandle": "5vrvd7g-input-1",
                            "targetX": 0,
                            "targetY": 0,
                            "type": "default",
                            "updatable": true,
                            "z": 0
                        },
                        {
                            "id": "vueflow__edge-5vrvd7g5vrvd7g-output-1-fd7f1687-e768-4a5e-8ae9-9c87ad24ae39fd7f1687-e768-4a5e-8ae9-9c87ad24ae39-input-1",
                            "class": "source-5vrvd7g-output-1 target-fd7f1687-e768-4a5e-8ae9-9c87ad24ae39-input-1",
                            "markerEnd": "",
                            "selectable": true,
                            "source": "5vrvd7g",
                            "sourceHandle": "5vrvd7g-output-1",
                            "sourceX": 0,
                            "sourceY": 0,
                            "target": "fd7f1687-e768-4a5e-8ae9-9c87ad24ae39",
                            "targetHandle": "fd7f1687-e768-4a5e-8ae9-9c87ad24ae39-input-1",
                            "targetX": 0,
                            "targetY": 0,
                            "type": "default",
                            "updatable": true,
                            "z": 0
                        },
                        {
                            "id": "vueflow__edge-ZDnOyReNGu2LvF0eikrVjZDnOyReNGu2LvF0eikrVj-output-1-m5en8tmm5en8tm-input-1",
                            "source": "ZDnOyReNGu2LvF0eikrVj",
                            "sourceHandle": "ZDnOyReNGu2LvF0eikrVj-output-1",
                            "target": "m5en8tm",
                            "targetHandle": "m5en8tm-input-1",
                            "class": "source-ZDnOyReNGu2LvF0eikrVj-output-1 target-m5en8tm-input-1",
                            "updatable": true,
                            "selectable": true,
                            "type": "default",
                            "markerEnd": "",
                            "z": 0,
                            "sourceX": 0,
                            "sourceY": 0,
                            "targetX": 0,
                            "targetY": 0
                        },
                        {
                            "id": "edge-x90ybvf",
                            "selected": false,
                            "target": "hrok4jm",
                            "source": "bm9a669",
                            "targetHandle": "hrok4jm-input-1",
                            "sourceHandle": "bm9a669-output-1",
                            "updatable": true,
                            "selectable": true,
                            "type": "default",
                            "markerEnd": "",
                            "z": 0,
                            "sourceX": 0,
                            "sourceY": 0,
                            "targetX": 0,
                            "targetY": 0
                        },
                        {
                            "id": "vueflow__edge-fd7f1687-e768-4a5e-8ae9-9c87ad24ae39fd7f1687-e768-4a5e-8ae9-9c87ad24ae39-output-1-bm9a669bm9a669-input-1",
                            "source": "fd7f1687-e768-4a5e-8ae9-9c87ad24ae39",
                            "sourceHandle": "fd7f1687-e768-4a5e-8ae9-9c87ad24ae39-output-1",
                            "target": "bm9a669",
                            "targetHandle": "bm9a669-input-1",
                            "class": "source-fd7f1687-e768-4a5e-8ae9-9c87ad24ae39-output-1 target-bm9a669-input-1",
                            "updatable": true,
                            "selectable": true,
                            "type": "default",
                            "markerEnd": "",
                            "z": 0,
                            "sourceX": 0,
                            "sourceY": 0,
                            "targetX": 0,
                            "targetY": 0
                        }
                    ],
                    "position": [
                        -48,
                        390.7
                    ],
                    "zoom": 0.6
                },
                "settings": {
                    "blockDelay": 0,
                    "debugMode": false,
                    "defaultColumnName": "column",
                    "executedBlockOnWeb": false,
                    "inputAutocomplete": true,
                    "insertDefaultColumn": true,
                    "notification": true,
                    "onError": "stop-workflow",
                    "publicId": "",
                    "restartTimes": 3,
                    "reuseLastState": false,
                    "saveLog": true,
                    "tabLoadTimeout": 30000
                },
                "globalData": "[{ \"key\": \"value\" }]",
                "description": "",
                "includedWorkflows": {}
            },
            "workflow_stats": {
                "downloads": 10,
                "executions": 6,
                "executions-failed": 5,
            }
        },
        "controller_stats": {
            "downloads": 10,
            "executions": 6,
        },
        "createdAt": "2021-08-05T16:29:17.406Z",
        "updatedAt": "2021-08-05T16:29:17.406Z"
    },
    {
        "controller_id": "google.com",
        "controller_name": "Google",
        "automation": {
            "definition": {
                "extVersion": "1.18.1",
                "name": "Google DSAR",
                "id": "HHT4_mtC6X01mQ8uzQi97",
                "icon": "riGlobalLine",
                "verified": true,
                "table": [],
                "version": "1.18.1",
                "drawflow": {
                  "nodes": [
                    {
                      "computedPosition": {
                        "x": 96,
                        "y": 97,
                        "z": 0
                      },
                      "data": {
                        "activeInInput": false,
                        "contextMenuName": "",
                        "contextTypes": [],
                        "date": "",
                        "days": [],
                        "delay": 5,
                        "description": "",
                        "disableBlock": false,
                        "interval": 60,
                        "isUrlRegex": false,
                        "observeElement": {
                          "baseElOptions": {
                            "attributeFilter": [],
                            "attributes": false,
                            "characterData": false,
                            "childList": true,
                            "subtree": false
                          },
                          "baseSelector": "",
                          "matchPattern": "",
                          "selector": "",
                          "targetOptions": {
                            "attributeFilter": [],
                            "attributes": false,
                            "characterData": false,
                            "childList": true,
                            "subtree": false
                          }
                        },
                        "shortcut": "",
                        "time": "00:00",
                        "type": "manual",
                        "url": ""
                      },
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "w8mVgv2A0WjHWMafV8sCM-output-1",
                            "position": "right",
                            "x": 196.00001017252606,
                            "y": 28.000030517578125,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "id": "w8mVgv2A0WjHWMafV8sCM",
                      "label": "trigger",
                      "position": {
                        "x": 96,
                        "y": 97
                      },
                      "type": "BlockBasic"
                    },
                    {
                      "computedPosition": {
                        "x": 388,
                        "y": 97,
                        "z": 0
                      },
                      "data": {
                        "active": false,
                        "customUserAgent": false,
                        "description": "",
                        "disableBlock": false,
                        "inGroup": false,
                        "onError": {
                          "dataToInsert": [],
                          "enable": false,
                          "insertData": false,
                          "retry": false,
                          "retryInterval": 2,
                          "retryTimes": 1,
                          "toDo": "error"
                        },
                        "updatePrevTab": false,
                        "url": "https://takeout.google.com/",
                        "userAgent": "",
                        "waitTabLoaded": false
                      },
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "-fKQEarOlHLrmPXLrncsX-output-1",
                            "position": "right",
                            "x": 196.00006103515625,
                            "y": 28.000030517578125,
                            "width": 16,
                            "height": 16
                          }
                        ],
                        "target": [
                          {
                            "id": "-fKQEarOlHLrmPXLrncsX-input-1",
                            "position": "left",
                            "x": -20,
                            "y": 28.000030517578125,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "id": "-fKQEarOlHLrmPXLrncsX",
                      "label": "new-tab",
                      "position": {
                        "x": 388,
                        "y": 97
                      },
                      "selected": false,
                      "type": "BlockBasic"
                    },
                    {
                      "computedPosition": {
                        "x": 680,
                        "y": 36,
                        "z": 0
                      },
                      "data": {
                        "description": "Auswahl aufheben",
                        "disableBlock": false,
                        "findBy": "xpath",
                        "markEl": false,
                        "multiple": false,
                        "selector": "/html/body/c-wiz/div/c-wiz/div/div[2]/div[2]/c-wiz/div/div/div/div/div[2]/c-wiz[1]/div/div[3]/div/div[1]/div[1]/div[2]/div[2]/div/button/span",
                        "waitForSelector": true,
                        "waitSelectorTimeout": 5000
                      },
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "V2Ouw0U07R2apA1P7e5ha-output-1",
                            "position": "right",
                            "x": 195.99995930989584,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ],
                        "target": [
                          {
                            "id": "V2Ouw0U07R2apA1P7e5ha-input-1",
                            "position": "left",
                            "x": -20,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "id": "V2Ouw0U07R2apA1P7e5ha",
                      "label": "event-click",
                      "position": {
                        "x": 680,
                        "y": 36
                      },
                      "selected": false,
                      "type": "BlockBasic"
                    },
                    {
                      "computedPosition": {
                        "x": 972,
                        "y": 36,
                        "z": 0
                      },
                      "data": {
                        "description": "Alle auswählen",
                        "disableBlock": false,
                        "findBy": "xpath",
                        "markEl": false,
                        "multiple": false,
                        "selector": "/html/body/c-wiz/div/c-wiz/div/div[2]/div[2]/c-wiz/div/div/div/div/div[2]/c-wiz[1]/div/div[3]/div/div[1]/div[1]/div[2]/div[1]/div/button/span",
                        "waitForSelector": true,
                        "waitSelectorTimeout": 5000
                      },
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "SPLNKwfGxvNV74tCsC0Vt-output-1",
                            "position": "right",
                            "x": 195.99995930989584,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ],
                        "target": [
                          {
                            "id": "SPLNKwfGxvNV74tCsC0Vt-input-1",
                            "position": "left",
                            "x": -20,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "id": "SPLNKwfGxvNV74tCsC0Vt",
                      "label": "event-click",
                      "position": {
                        "x": 972,
                        "y": 36
                      },
                      "selected": false,
                      "type": "BlockBasic"
                    },
                    {
                      "computedPosition": {
                        "x": 1264,
                        "y": 36,
                        "z": 0
                      },
                      "data": {
                        "description": "",
                        "disableBlock": false,
                        "findBy": "cssSelector",
                        "incX": false,
                        "incY": false,
                        "markEl": false,
                        "multiple": false,
                        "scrollIntoView": false,
                        "scrollX": 0,
                        "scrollY": 6498,
                        "selector": "html",
                        "smooth": true,
                        "waitForSelector": false,
                        "waitSelectorTimeout": 5000
                      },
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "k0OlbCu6dNsWF1dRZXKGN-output-1",
                            "position": "right",
                            "x": 195.99995930989584,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ],
                        "target": [
                          {
                            "id": "k0OlbCu6dNsWF1dRZXKGN-input-1",
                            "position": "left",
                            "x": -20,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "id": "k0OlbCu6dNsWF1dRZXKGN",
                      "label": "element-scroll",
                      "position": {
                        "x": 1264,
                        "y": 36
                      },
                      "type": "BlockBasic"
                    },
                    {
                      "computedPosition": {
                        "x": 1556,
                        "y": 36,
                        "z": 0
                      },
                      "data": {
                        "description": "Nächster Schritt",
                        "disableBlock": false,
                        "findBy": "xpath",
                        "markEl": false,
                        "multiple": false,
                        "selector": "/html/body/c-wiz/div/c-wiz/div/div[2]/div[2]/c-wiz/div/div/div/div/div[2]/c-wiz[1]/div/div[3]/div/div[2]/div/div/button/span",
                        "waitForSelector": true,
                        "waitSelectorTimeout": 5000
                      },
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "I8f5p7oW8e03e-XWqDk1x-output-1",
                            "position": "right",
                            "x": 195.99995930989584,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ],
                        "target": [
                          {
                            "id": "I8f5p7oW8e03e-XWqDk1x-input-1",
                            "position": "left",
                            "x": -20,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "id": "I8f5p7oW8e03e-XWqDk1x",
                      "label": "event-click",
                      "position": {
                        "x": 1556,
                        "y": 36
                      },
                      "selected": false,
                      "type": "BlockBasic"
                    },
                    {
                      "computedPosition": {
                        "x": 1848,
                        "y": 36,
                        "z": 0
                      },
                      "data": {
                        "description": "",
                        "disableBlock": false,
                        "findBy": "cssSelector",
                        "incX": false,
                        "incY": false,
                        "markEl": false,
                        "multiple": false,
                        "scrollIntoView": false,
                        "scrollX": 0,
                        "scrollY": 322,
                        "selector": "html",
                        "smooth": true,
                        "waitForSelector": false,
                        "waitSelectorTimeout": 5000
                      },
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "E4eOzzmpYkMgCeK_QAtv6-output-1",
                            "position": "right",
                            "x": 195.99995930989584,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ],
                        "target": [
                          {
                            "id": "E4eOzzmpYkMgCeK_QAtv6-input-1",
                            "position": "left",
                            "x": -20,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "id": "E4eOzzmpYkMgCeK_QAtv6",
                      "label": "element-scroll",
                      "position": {
                        "x": 1848,
                        "y": 36
                      },
                      "type": "BlockBasic"
                    },
                    {
                      "computedPosition": {
                        "x": 2140,
                        "y": 36,
                        "z": 0
                      },
                      "data": {
                        "description": "Export erstellen",
                        "disableBlock": false,
                        "findBy": "xpath",
                        "markEl": true,
                        "multiple": false,
                        "selector": "/html/body/c-wiz/div/c-wiz/div/div[2]/div[2]/c-wiz/div/div/div/div/div[2]/c-wiz[2]/div/div[3]/div/div[2]/div/div/button/div[3]",
                        "waitForSelector": true,
                        "waitSelectorTimeout": 5000
                      },
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "H8QFA-V45rfPBhHncExl8-output-1",
                            "position": "right",
                            "x": 195.99995930989584,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ],
                        "target": [
                          {
                            "id": "H8QFA-V45rfPBhHncExl8-input-1",
                            "position": "left",
                            "x": -20,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "id": "H8QFA-V45rfPBhHncExl8",
                      "label": "event-click",
                      "position": {
                        "x": 2140,
                        "y": 36
                      },
                      "selected": false,
                      "type": "BlockBasic"
                    },
                    {
                      "type": "BlockBasic",
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "m9c2zjj-output-1",
                            "position": "right",
                            "x": 195.99995930989584,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ],
                        "target": [
                          {
                            "id": "m9c2zjj-input-1",
                            "position": "left",
                            "x": -20,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "computedPosition": {
                        "x": 680,
                        "y": 158,
                        "z": 0
                      },
                      "data": {
                        "code": "const event = new CustomEvent( '__js-event__', {\n  'detail': {\n    'type': 'to_active',\n    'data': { 'workflow_state': 'started' }\n  }\n});\nwindow.dispatchEvent(event);",
                        "description": "Send start signal",
                        "disableBlock": false,
                        "everyNewTab": false,
                        "preloadScripts": [],
                        "runBeforeLoad": false,
                        "timeout": 20000
                      },
                      "label": "javascript-code",
                      "id": "m9c2zjj",
                      "selected": false,
                      "position": {
                        "x": 680,
                        "y": 158
                      }
                    },
                    {
                      "type": "BlockBasic",
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "kl9udb1-output-1",
                            "position": "right",
                            "x": 196.00016276041669,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ],
                        "target": [
                          {
                            "id": "kl9udb1-input-1",
                            "position": "left",
                            "x": -20,
                            "y": 27.999979654947918,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "computedPosition": {
                        "x": 2432,
                        "y": 36,
                        "z": 0
                      },
                      "data": {
                        "disableBlock": false,
                        "description": "Send completed signal",
                        "timeout": 20000,
                        "code": "const event = new CustomEvent( '__js-event__', {\n  'detail': {\n    'type': 'to_active',\n    'data': { 'workflow_state': 'completed' }\n  }\n});\nwindow.dispatchEvent(event);",
                        "preloadScripts": [],
                        "everyNewTab": false,
                        "runBeforeLoad": false
                      },
                      "label": "javascript-code",
                      "id": "kl9udb1",
                      "selected": false,
                      "position": {
                        "x": 2432,
                        "y": 36
                      }
                    },
                    {
                      "type": "BlockBasic",
                      "dimensions": {
                        "width": 192,
                        "height": 72
                      },
                      "handleBounds": {
                        "source": [
                          {
                            "id": "am9ocwk-output-1",
                            "position": "right",
                            "x": 196.00016276041669,
                            "y": 28.000030517578125,
                            "width": 16,
                            "height": 16
                          }
                        ],
                        "target": [
                          {
                            "id": "am9ocwk-input-1",
                            "position": "left",
                            "x": -20,
                            "y": 28.000030517578125,
                            "width": 16,
                            "height": 16
                          }
                        ]
                      },
                      "computedPosition": {
                        "x": 2724,
                        "y": 36,
                        "z": 0
                      },
                      "position": {
                        "x": 2724,
                        "y": 36
                      },
                      "label": "close-tab",
                      "data": {
                        "disableBlock": false,
                        "url": "",
                        "description": "",
                        "activeTab": true,
                        "closeType": "tab",
                        "allWindows": false
                      },
                      "id": "am9ocwk",
                      "selected": false
                    }
                  ],
                  "edges": [
                    {
                      "id": "vueflow__edge-w8mVgv2A0WjHWMafV8sCM-output-1--fKQEarOlHLrmPXLrncsX-input-1",
                      "class": "source-w8mVgv2A0WjHWMafV8sCM-output-1 target--fKQEarOlHLrmPXLrncsX-input-1",
                      "markerEnd": "",
                      "selectable": true,
                      "source": "w8mVgv2A0WjHWMafV8sCM",
                      "sourceHandle": "w8mVgv2A0WjHWMafV8sCM-output-1",
                      "sourceX": 0,
                      "sourceY": 0,
                      "target": "-fKQEarOlHLrmPXLrncsX",
                      "targetHandle": "-fKQEarOlHLrmPXLrncsX-input-1",
                      "targetX": 0,
                      "targetY": 0,
                      "type": "default",
                      "updatable": true,
                      "z": 0
                    },
                    {
                      "id": "vueflow__edge--fKQEarOlHLrmPXLrncsX-output-1-V2Ouw0U07R2apA1P7e5ha-input-1",
                      "class": "source--fKQEarOlHLrmPXLrncsX-output-1 target-V2Ouw0U07R2apA1P7e5ha-input-1",
                      "markerEnd": "",
                      "selectable": true,
                      "source": "-fKQEarOlHLrmPXLrncsX",
                      "sourceHandle": "-fKQEarOlHLrmPXLrncsX-output-1",
                      "sourceX": 0,
                      "sourceY": 0,
                      "target": "V2Ouw0U07R2apA1P7e5ha",
                      "targetHandle": "V2Ouw0U07R2apA1P7e5ha-input-1",
                      "targetX": 0,
                      "targetY": 0,
                      "type": "default",
                      "updatable": true,
                      "z": 0
                    },
                    {
                      "id": "vueflow__edge-V2Ouw0U07R2apA1P7e5ha-output-1-SPLNKwfGxvNV74tCsC0Vt-input-1",
                      "class": "source-V2Ouw0U07R2apA1P7e5ha-output-1 target-SPLNKwfGxvNV74tCsC0Vt-input-1",
                      "markerEnd": "",
                      "selectable": true,
                      "source": "V2Ouw0U07R2apA1P7e5ha",
                      "sourceHandle": "V2Ouw0U07R2apA1P7e5ha-output-1",
                      "sourceX": 0,
                      "sourceY": 0,
                      "target": "SPLNKwfGxvNV74tCsC0Vt",
                      "targetHandle": "SPLNKwfGxvNV74tCsC0Vt-input-1",
                      "targetX": 0,
                      "targetY": 0,
                      "type": "default",
                      "updatable": true,
                      "z": 0
                    },
                    {
                      "id": "vueflow__edge-SPLNKwfGxvNV74tCsC0Vt-output-1-k0OlbCu6dNsWF1dRZXKGN-input-1",
                      "class": "source-SPLNKwfGxvNV74tCsC0Vt-output-1 target-k0OlbCu6dNsWF1dRZXKGN-input-1",
                      "markerEnd": "",
                      "selectable": true,
                      "source": "SPLNKwfGxvNV74tCsC0Vt",
                      "sourceHandle": "SPLNKwfGxvNV74tCsC0Vt-output-1",
                      "sourceX": 0,
                      "sourceY": 0,
                      "target": "k0OlbCu6dNsWF1dRZXKGN",
                      "targetHandle": "k0OlbCu6dNsWF1dRZXKGN-input-1",
                      "targetX": 0,
                      "targetY": 0,
                      "type": "default",
                      "updatable": true,
                      "z": 0
                    },
                    {
                      "id": "vueflow__edge-k0OlbCu6dNsWF1dRZXKGN-output-1-I8f5p7oW8e03e-XWqDk1x-input-1",
                      "class": "source-k0OlbCu6dNsWF1dRZXKGN-output-1 target-I8f5p7oW8e03e-XWqDk1x-input-1",
                      "markerEnd": "",
                      "selectable": true,
                      "source": "k0OlbCu6dNsWF1dRZXKGN",
                      "sourceHandle": "k0OlbCu6dNsWF1dRZXKGN-output-1",
                      "sourceX": 0,
                      "sourceY": 0,
                      "target": "I8f5p7oW8e03e-XWqDk1x",
                      "targetHandle": "I8f5p7oW8e03e-XWqDk1x-input-1",
                      "targetX": 0,
                      "targetY": 0,
                      "type": "default",
                      "updatable": true,
                      "z": 0
                    },
                    {
                      "id": "vueflow__edge-I8f5p7oW8e03e-XWqDk1x-output-1-E4eOzzmpYkMgCeK_QAtv6-input-1",
                      "class": "source-I8f5p7oW8e03e-XWqDk1x-output-1 target-E4eOzzmpYkMgCeK_QAtv6-input-1",
                      "markerEnd": "",
                      "selectable": true,
                      "source": "I8f5p7oW8e03e-XWqDk1x",
                      "sourceHandle": "I8f5p7oW8e03e-XWqDk1x-output-1",
                      "sourceX": 0,
                      "sourceY": 0,
                      "target": "E4eOzzmpYkMgCeK_QAtv6",
                      "targetHandle": "E4eOzzmpYkMgCeK_QAtv6-input-1",
                      "targetX": 0,
                      "targetY": 0,
                      "type": "default",
                      "updatable": true,
                      "z": 0
                    },
                    {
                      "id": "vueflow__edge-E4eOzzmpYkMgCeK_QAtv6-output-1-H8QFA-V45rfPBhHncExl8-input-1",
                      "class": "source-E4eOzzmpYkMgCeK_QAtv6-output-1 target-H8QFA-V45rfPBhHncExl8-input-1",
                      "markerEnd": "",
                      "selectable": true,
                      "source": "E4eOzzmpYkMgCeK_QAtv6",
                      "sourceHandle": "E4eOzzmpYkMgCeK_QAtv6-output-1",
                      "sourceX": 0,
                      "sourceY": 0,
                      "target": "H8QFA-V45rfPBhHncExl8",
                      "targetHandle": "H8QFA-V45rfPBhHncExl8-input-1",
                      "targetX": 0,
                      "targetY": 0,
                      "type": "default",
                      "updatable": true,
                      "z": 0
                    },
                    {
                      "id": "vueflow__edge--fKQEarOlHLrmPXLrncsX-fKQEarOlHLrmPXLrncsX-output-1-m9c2zjjm9c2zjj-input-1",
                      "source": "-fKQEarOlHLrmPXLrncsX",
                      "sourceHandle": "-fKQEarOlHLrmPXLrncsX-output-1",
                      "target": "m9c2zjj",
                      "targetHandle": "m9c2zjj-input-1",
                      "class": "source--fKQEarOlHLrmPXLrncsX-output-1 target-m9c2zjj-input-1",
                      "updatable": true,
                      "selectable": true,
                      "type": "default",
                      "markerEnd": "",
                      "z": 0,
                      "sourceX": 0,
                      "sourceY": 0,
                      "targetX": 0,
                      "targetY": 0
                    },
                    {
                      "id": "vueflow__edge-H8QFA-V45rfPBhHncExl8H8QFA-V45rfPBhHncExl8-output-1-kl9udb1kl9udb1-input-1",
                      "source": "H8QFA-V45rfPBhHncExl8",
                      "sourceHandle": "H8QFA-V45rfPBhHncExl8-output-1",
                      "target": "kl9udb1",
                      "targetHandle": "kl9udb1-input-1",
                      "class": "source-H8QFA-V45rfPBhHncExl8-output-1 target-kl9udb1-input-1",
                      "updatable": true,
                      "selectable": true,
                      "type": "default",
                      "markerEnd": "",
                      "z": 0,
                      "sourceX": 0,
                      "sourceY": 0,
                      "targetX": 0,
                      "targetY": 0
                    },
                    {
                      "id": "vueflow__edge-kl9udb1kl9udb1-output-1-am9ocwkam9ocwk-input-1",
                      "source": "kl9udb1",
                      "sourceHandle": "kl9udb1-output-1",
                      "target": "am9ocwk",
                      "targetHandle": "am9ocwk-input-1",
                      "class": "source-kl9udb1-output-1 target-am9ocwk-input-1",
                      "updatable": true,
                      "selectable": true,
                      "type": "default",
                      "markerEnd": "",
                      "z": 0,
                      "sourceX": 0,
                      "sourceY": 0,
                      "targetX": 0,
                      "targetY": 0
                    }
                  ],
                  "position": [
                    -360.6,
                    394.7
                  ],
                  "zoom": 0.6
                },
                "settings": {
                  "blockDelay": 0,
                  "debugMode": false,
                  "defaultColumnName": "column",
                  "executedBlockOnWeb": false,
                  "inputAutocomplete": true,
                  "insertDefaultColumn": false,
                  "notification": true,
                  "onError": "stop-workflow",
                  "publicId": "",
                  "restartTimes": 3,
                  "reuseLastState": false,
                  "saveLog": true
                },
                "globalData": "[{ \"key\": \"value\" }]",
                "description": "",
                "includedWorkflows": {}
            },
            "format": "automa",
            "version": "0.1",
            "workflow_stats": {
                "downloads": 10,
                "executions": 6,
                "executions-failed": 5,
            }
        },
        "createdAt": "2021-08-05T16:29:17.406Z",
        "updatedAt": "2021-08-05T16:29:17.406Z"
    }
]);