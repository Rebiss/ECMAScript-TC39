/* numbers comparations */

'2' == 2
true

'2' === 2
false

 [2] == 2
true

 [] + []
''

 [] == []
false

typeof []
'object'

[] == ![]
true

+[] == +![]
true

/* null comparation */

0 > null
false

0 >= null
true

 0 == null
false

0 <= null
true

0 < null
false

 typeof null
'object'

 null instanceof Object
false

/* checking array type */

 {}.toString.call([])
'[object Array]'

 function FooBar() {}
undefined

 {}.toString.call(new FooBar)
'[object Object]'

 (new FooBar).constructor == Foo
false

 [] instanceof Array
true

 Array.isArray([])
true

/* math */

 999999999999999
999999999999999

9999999999999999
10000000000000000

-9999999999999999
-10000000000000000

0.1 + 0.2 == 0.3
false

 0.1 + 0.2
0.30000000000000004

 3 > 2 > 1
false

3 > 2 >= 1
true

'2' + 1
'21'

'2' - 1
1

'2' - -1
3

1/0
Infinity

typeof Infinity
'number'

 0 === -0
true

1/0
Infinity

 1/-0
-Infinity

> Infinity == -Infinity
false

Number.MAX_VALUE
1.7976931348623157e+308

 0 - 1
-1

sNumber.MIN_VALUE < 0
false

Number.MIN_VALUE
5e-324>

Math.max(1,2,3)
3

Math.min(1,2,3)
1

Math.max() > Math.min()
false

Math.max()
-Infinity

Math.min()
Infinity

/* string */

'wtf' instanceof String
false

typeof 'wtf'
'string'

typeof String('wtf')
'string'

String('wtf') === 'wtf'
true

String('wtf') === new String('wtf')
false

String('wtf') == new String('wtf')
true

new String('wtf')
{ '0': 'w',
  '1': 't',
  '2': 'f' }

new String('wtf').toString()
'wtf'

'wft' + 1
'wft1'

'wft' - 1
NaN

/* NaN */

typeof NaN
'number'

typeof 1138
'number'

1138 == 1138
true

NaN == NaN
false

isNaN('wft' - 1)
true

/* boolean math */

true + false
1

 true + true == true
false

/* construct function */

new 0xff.constructor.constructor('console.error("WTF")')()
WTF

new Function('console.error("WTF")')()
WTF

/* typeof/instanceof */

Array instanceof Array
false

new Array instanceof Array
true

Math instanceof Math
TypeError: Expecting a function in instanceof check, but got #<Object>
    at repl:1:18
    at REPLServer.self.eval (repl.js:110:21)
    at Interface.<anonymous> (repl.js:239:12)
    at Interface.emit (events.js:95:17)
    at Interface._onLine (readline.js:203:10)
    at Interface._line (readline.js:532:8)
    at Interface._ttyWrite (readline.js:761:14)
    at ReadStream.onkeypress (readline.js:100:10)
    at ReadStream.emit (events.js:98:17)
    at emitKey (readline.js:1096:12)
>