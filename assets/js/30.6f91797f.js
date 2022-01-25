(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{419:function(e,t,a){e.exports=a.p+"assets/img/CH-UN03.d4192237.jpg"},465:function(e,t,a){"use strict";a.r(t);var o=a(56),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"chap3-paradigm-overview-编程范式总览"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#chap3-paradigm-overview-编程范式总览"}},[e._v("#")]),e._v(" Chap3. PARADIGM OVERVIEW 编程范式总览")]),e._v(" "),o("p",[o("img",{attrs:{src:a(419),alt:""}})]),e._v(" "),o("p",[e._v("The three paradigms included in this overview chapter are structured programming, object-orient programming, and functional programming.")]),e._v(" "),o("blockquote",[o("p",[e._v("本章将讲述三个编程范式，它们分别是结构化编程（structured programming）、 面向对象编程（object-oriented programming）以及函数式编程（functional programming）。")])]),e._v(" "),o("h2",{attrs:{id:"structured-programming-结构化编程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#structured-programming-结构化编程"}},[e._v("#")]),e._v(" STRUCTURED PROGRAMMING 结构化编程")]),e._v(" "),o("p",[e._v("The first paradigm to be adopted (but not the first to be invented) was structured programming, which was discovered by Edsger Wybe Dijkstra in 1968. Dijkstra showed that the use of unrestrained jumps (goto statements) is harmful to program structure. As we’ll see in the chapters that follow, he replaced those jumps with the more familiar if/then/else and do/while/until constructs.")]),e._v(" "),o("blockquote",[o("p",[e._v("结构化编程是第一个普遍被采用的编程范式（但是却不是第一个被提出的），由 Edsger Wybe Dijkstra 于 1968 年最先提出。与此同时，Dijkstra 还论证了使用 goto 这样的无限制跳转语句将会损害程序的整体结构。接下来的章节我们还会说到，二是这位 Dijkstra 最先主张用我们现在熟知的 if/then/else 语句和 do/while/until 语句来代替跳转语句的。")])]),e._v(" "),o("p",[e._v("We can summarize the structured programming paradigm as follows:")]),e._v(" "),o("blockquote",[o("p",[e._v("我们可以将结构化编程范式归结为一句话：")])]),e._v(" "),o("p",[e._v("Structured programming imposes discipline on direct transfer of control.")]),e._v(" "),o("blockquote",[o("p",[e._v("结构化编程对程序控制权的直接转移进行了限制和规范。")])]),e._v(" "),o("h2",{attrs:{id:"object-oriented-programming-面向对象编程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#object-oriented-programming-面向对象编程"}},[e._v("#")]),e._v(" OBJECT-ORIENTED PROGRAMMING 面向对象编程")]),e._v(" "),o("p",[e._v("The second paradigm to be adopted was actually discovered two years earlier, in 1966, by Ole Johan Dahl and Kristen Nygaard. These two programmers noticed that the function call stack frame in the ALGOL language could be moved to a heap, thereby allowing local variables declared by a function to exist long after the function returned. The function became a constructor for a class, the local variables became instance variables, and the nested functions became methods. This led inevitably to the discovery of polymorphism through the disciplined use of function pointers.")]),e._v(" "),o("blockquote",[o("p",[e._v("说到编程领域中第二个被广泛采用的编程范式，当然就是面向对象编程了：事实上，这个编程范式的提出比结构化编程还早了两年，是在 1966 年由 Ole Johan Dahl 和 Kriste Nygaard 在论文中总结归纳出来的。这两个程序员注意到在 ALGOL 语言中. 函数调用堆栈（call stack frame）可以被挪到堆内存区域里，这样函数定义的本地变量就可以在函数返回之后继续存在。这个函数就成为了一个类（class）的构造函数，而它所定义的本地变量就是类的成员变量，构造函数定义的嵌套函数就成为了成员方法（method）。这样一来，我们就可以利用多态（polymorphism）来限制用户对函数指针的使用。")])]),e._v(" "),o("p",[e._v("We can summarize the object-oriented programming paradigm as follows:")]),e._v(" "),o("blockquote",[o("p",[e._v("在这里，我们也可以用一句话来总结面向对象编程：")])]),e._v(" "),o("p",[e._v("Object-oriented programming imposes discipline on indirect transfer of control.")]),e._v(" "),o("blockquote",[o("p",[e._v("面向对象编程对程序控制权的间接转移进行了限制和规范。")])]),e._v(" "),o("h2",{attrs:{id:"functional-programming-函数式编程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#functional-programming-函数式编程"}},[e._v("#")]),e._v(" FUNCTIONAL PROGRAMMING 函数式编程")]),e._v(" "),o("p",[e._v("The third paradigm, which has only recently begun to be adopted, was the first to be invented. Indeed, its invention predates computer programming itself. Functional programming is the direct result of the work of Alonzo Church, who in 1936 invented l-calculus while pursuing the same mathematical problem that was motivating Alan Turing at the same time. His l-calculus is the foundation of the LISP language, invented in 1958 by John McCarthy. A foundational notion of l-calculus is immutability—that is, the notion that the values of symbols do not change. This effectively means that a functional language has no assignment statement. Most functional languages do, in fact, have some means to alter the value of a variable, but only under very strict discipline.")]),e._v(" "),o("blockquote",[o("p",[e._v("尽管第三个编程范式是近些年才刚刚开始被采用的，但它其实是三个范式中最先被发明的。事实上，函数式编程概念是基于与阿兰·图灵同时代的数学家 Alonzo Church 在 1936 年发明的入演算的直接衍生物。1958 年 John Mccarthy 利用其作为基础发明了 LISP 语言。众所周知，λ 演算法的一个核心思想是不可变性——某个符号所对应的值是永远不变的，所以从理论上来说，函数式编程语言中应该是没有赋值语句的。大部分函数式编程语言只允许在非常严格的限制条件下，才可以更改某个变量的值。")])]),e._v(" "),o("p",[e._v("We can summarize the functional programming paradigm as follows:")]),e._v(" "),o("blockquote",[o("p",[e._v("因此，我们在这里可以将函数式编程范式总结为下面这句话：")])]),e._v(" "),o("p",[e._v("Functional programming imposes discipline upon assignment.")]),e._v(" "),o("blockquote",[o("p",[e._v("函数式编程对程序中的赋值进行了限制和规范。")])]),e._v(" "),o("h2",{attrs:{id:"food-for-thought-仅供思考"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#food-for-thought-仅供思考"}},[e._v("#")]),e._v(" FOOD FOR THOUGHT 仅供思考")]),e._v(" "),o("p",[e._v("Notice the pattern that I’ve quite deliberately set up in introducing these three programming paradigms: Each of the paradigms removes capabilities from the programmer. None of them adds new capabilities. Each imposes some kind of extra discipline that is negative in its intent. The paradigms tell us what not to do, more than they tell us what to do.")]),e._v(" "),o("blockquote",[o("p",[e._v("如你所见，我在介绍三个编程范式的时候，有意采用了上面这种格式，目的是凸显每个编程范式的实际含义——它们都从某一方面限制和规范了程序员的能力。没有一个范式是增加新能力的。也就是说，每个编程范式的目的都是设置限制。这些范式主要是为了告诉我们不能做什么，而不是可以做什么。")])]),e._v(" "),o("p",[e._v("Another way to look at this issue is to recognize that each paradigm takes something away from us. The three paradigms together remove goto statements, function pointers, and assignment. Is there anything left to take away?")]),e._v(" "),o("blockquote",[o("p",[e._v("另外，我们应该认识到，这三个编程范式分别限制了 goto 语句、函数指针和赋值语句的使用。那么除此之外，还有什么可以去除的吗？")])]),e._v(" "),o("p",[e._v("Probably not. Thus these three paradigms are likely to be the only three we will see—at least the only three that are negative. Further evidence that there are no more such paradigms is that they were all discovered within the ten years between 1958 and 1968. In the many decades that have followed, no new paradigms have been added.")]),e._v(" "),o("blockquote",[o("p",[e._v("可能没有了。因此这三个编程范式可能是仅有的三个了——如果单论去除能力的编程范式的话。支撑这一结论的另外一个证据是，三个编程范式都是在 1958 年到 1968 年这 10 年间被提出来的，后续再也没有新的编程范式出现过。")])]),e._v(" "),o("h2",{attrs:{id:"conclusion-本章小结"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion-本章小结"}},[e._v("#")]),e._v(" CONCLUSION 本章小结")]),e._v(" "),o("p",[e._v("What does this history lesson on paradigms have to do with architecture? Everything. We use polymorphism as the mechanism to cross architectural boundaries; we use functional programming to impose discipline on the location of and access to data; and we use structured programming as the algorithmic foundation of our modules.")]),e._v(" "),o("blockquote",[o("p",[e._v("大家可能会问，这些编程范式的历史知识与软件架构有关系吗？当然有，而目关系相当密切。譬如说，多态是我们跨越架构边界的手段，函数式编程是我们规范和限制数据存放位置与访问权限的手段，结构化编程则是各模块的算法实现基础。")])]),e._v(" "),o("p",[e._v("Notice how well those three align with the three big concerns of architecture: function, separation of components, and data management.")]),e._v(" "),o("blockquote",[o("p",[e._v("这和软件架构的三大关注重点不谋而合：功能性、组件独立性以及数据管理。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);