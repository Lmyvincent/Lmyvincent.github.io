(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{350:function(e,o,t){e.exports=t.p+"assets/img/CH-UN18.7cc88386.jpg"},452:function(e,o,t){"use strict";t.r(o);var a=t(56),s=Object(a.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"chap18-boundary-anatomy-边界剖析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chap18-boundary-anatomy-边界剖析"}},[e._v("#")]),e._v(" Chap18. BOUNDARY ANATOMY 边界剖析")]),e._v(" "),a("p",[a("img",{attrs:{src:t(350),alt:""}})]),e._v(" "),a("p",[e._v("The architecture of a system is defined by a set of software components and the boundaries that separate them. Those boundaries come in many different forms. In this chapter we’ll look at some of the most common.")]),e._v(" "),a("blockquote",[a("p",[e._v("一个系统的架构是由一系列软件组件以及它们之间的边界共同定义的。而这些边界有着多种不同的存在形式。在本章中和我们看看其中最常见的一些形式。")])]),e._v(" "),a("h2",{attrs:{id:"boundary-crossing-跨边界调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boundary-crossing-跨边界调用"}},[e._v("#")]),e._v(" BOUNDARY CROSSING 跨边界调用")]),e._v(" "),a("p",[e._v("At runtime, a boundary crossing is nothing more than a function on one side of the boundary calling a function on the other side and passing along some data. The trick to creating an appropriate boundary crossing is to manage the source code dependencies.")]),e._v(" "),a("blockquote",[a("p",[e._v("在运行时，跨边界调用指的是边界线一侧的函数调用另一侧的函数，并同时传递数据的行为。构造合理的跨边界调用需要我们对源码中的依赖关系进行合理管控。")])]),e._v(" "),a("p",[e._v("Why source code? Because when one source code module changes, other source code modules may have to be changed or recompiled, and then redeployed. Managing and building firewalls against this change is what boundaries are all about.")]),e._v(" "),a("blockquote",[a("p",[e._v("为什么需要管控源码中的依赖关系呢？因为当一个模块的源码发生变更时，其他模块的源码也可能会随之发生变更或重新编译，并需要重新部署。所谓划分边界，就是指在这些模块之间建立这种针对变更的防火墙。")])]),e._v(" "),a("h2",{attrs:{id:"the-dreaded-monolith-令人生畏的单体结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-dreaded-monolith-令人生畏的单体结构"}},[e._v("#")]),e._v(" THE DREADED MONOLITH 令人生畏的单体结构")]),e._v(" "),a("p",[e._v("The simplest and most common of the architectural boundaries has no strict physical representation. It is simply a disciplined segregation of functions and data within a single processor and a single address space. In a previous chapter, I called this the source-level decoupling mode.")]),e._v(" "),a("blockquote",[a("p",[e._v("最简单、最常见的架构边界通常并没有一个固定的物理形式，它们只是对同一个进程、同一个地址空间内的函数和数据进行了某种划分。在第 16 章中，我们称之为源码层次上的解耦模式。")])]),e._v(" "),a("p",[e._v("From a deployment point of view, this amounts to nothing more than a single executable file—the so-called monolith. This file might be a statically linked C or C++ project, a set of Java class files bound together into an executable jar file, a set of .NET binaries bound into a single .EXE file, and so on.")]),e._v(" "),a("blockquote",[a("p",[e._v("但是从部署的角度来看，这一切到最后都产生了一个单独的可执行文件——这就是所谓的单体结构。这个文件可能是一个静态链接形成的 C/C++ 项目，或是一个将一堆 Java 类绑定在一起的 jar 可执行文件，或是由一系列 .NET 二进制文件组成的 .EXE 文件等。")])]),e._v(" "),a("p",[e._v("The fact that the boundaries are not visible during the deployment of a monolith does not mean that they are not present and meaningful. Even when statically linked into a single executable, the ability to independently develop and marshal the various components for final assembly is immensely valuable.")]),e._v(" "),a("blockquote",[a("p",[e._v("虽然这类系统的架构边界在部署过程中并不可见，但这并不意味着它们就不存在或者没有意义。因为即使最终所有的组件都被静态链接成了一个可执行文件，这些边界的划分对该系统各组件的独立开发也是非常有意义的。")])]),e._v(" "),a("p",[e._v("Such architectures almost always depend on some kind of dynamic polymorphism1 to manage their internal dependencies. This is one of the reasons that object-oriented development has become such an important paradigm in recent decades. Without OO, or an equivalent form of polymorphism, architects must fall back on the dangerous practice of using pointers to functions to achieve the appropriate decoupling. Most architects find prolific use of pointers to functions to be too risky, so they are forced to abandon any kind of component partitioning.")]),e._v(" "),a("blockquote",[a("p",[e._v("因为这类架构一般都需要利用某种动态形式的多态来管理其内部的依赖关系。这也是为什么面向对象编程近几十年来逐渐成为一种重要编程范式的原因之一。如果不采用面向对象编程模式或是类似的多态实现，架构师们就只能退回到用函数指针这种危险的模式来进行组件解耦的时代。由于大部分架构师认为大量采用函数指针过于危险，所以在那样的情况卜，他们通常都在权衡利弊之后就干脆放弃划分组件了。")])]),e._v(" "),a("p",[e._v("The simplest possible boundary crossing is a function call from a low-level client to a higher-level service. Both the runtime dependency and the compile-time dependency point in the same direction, toward the higher-level component.")]),e._v(" "),a("blockquote",[a("p",[e._v("最简单的跨边界调用形式，是由低层客户端来调用高层服务函数，这种依赖关系在运行时和编译时会保持指向一致，都是从低层组件指向高层组件。")])]),e._v(" "),a("p",[e._v("In Figure 18.1, the flow of control crosses the boundary from left to right. The Client calls function f() on the Service. It passes along an instance of Data. The "),a("code",[e._v("<DS>")]),e._v(" marker simply indicates a data structure. The Data may be passed as a function argument or by some other more elaborate means. Note that the definition of the Data is on the called side of the boundary.")]),e._v(" "),a("blockquote",[a("p",[e._v("在图 18.1 中，我们可以看到控制流跨越边界的方向是从左向右的，Client 调用了 Service 上的函数 "),a("code",[e._v("f()")]),e._v("，并向它传递了一个 Data 实例。这里的 "),a("code",[e._v("<DS>")]),e._v(" 标记是指 Data 是一个数据结构。Data 实例的具体传递方法可以是函数的调用参数，也可以是其他更复杂的传递方式。读者在这里需要注意的是，Data 的定义位于边界的被调用方一侧。")])]),e._v(" "),a("Figures",{attrs:{figure:"18-1"}},[e._v("Flow of control crosses the boundary from a lower level to a higher level")]),e._v(" "),a("p",[e._v("When a high-level client needs to invoke a lower-level service, dynamic polymorphism is used to invert the dependency against the flow of control. The runtime dependency opposes the compile-time dependency.")]),e._v(" "),a("blockquote",[a("p",[e._v("但当高层组件中的客户端需要调用低层组件中的服务时，我们就需要运用动态形式的多态来反转依赖关系了。在这种情况下，系统在运行时的依赖关系与编译时的依赖关系就是相反的。")])]),e._v(" "),a("p",[e._v("In Figure 18.2, the flow of control crosses the boundary from left to right as before. The high-level Client calls the f() function of the lower-level ServiceImpl through the Service interface. Note, however, that all dependencies cross the boundary from right to left toward the higher-level component. Note, also, that the definition of the data structure is on the calling side of the boundary.")]),e._v(" "),a("blockquote",[a("p",[e._v("在图 18.2 中，控制流跨越边界的方向与之前是一样的，都是从左至右的。这里是高层组件 Client 通过 Service 接口调用了低层组件 Servicelmpl 上的函数 "),a("code",[e._v("f()")]),e._v("。但请读者注意，图 18.2 中所有的依赖关系却都是从右向左跨越边界的，方向是由低层组件指向高层组件的。同时，我们也应该注意到，这一次数据结构的定义是位于调用方这一侧的。")])]),e._v(" "),a("Figures",{attrs:{figure:"18-2"}},[e._v("Crossing the boundary against the flow of control")]),e._v(" "),a("p",[e._v("Even in a monolithic, statically linked executable, this kind of disciplined partitioning can greatly aid the job of developing, testing, and deploying the project. Teams can work independently of each other on their own components without treading on each other’s toes. High-level components remain independent of lower-level details.")]),e._v(" "),a("blockquote",[a("p",[e._v("即使是在一个单体部署、静态链接的可执行文件中，这种自律式的组件划分仍然可以极大地帮助整个项目的开发、测试与部署，使不同的团队可以独立开发不同的组件，不会互相干扰。高层组件与低层细节之间也可以得到良好的隔离，独立演进。")])]),e._v(" "),a("p",[e._v("Communications between components in a monolith are very fast and inexpensive. They are typically just function calls. Consequently, communications across source-level decoupled boundaries can be very chatty.")]),e._v(" "),a("blockquote",[a("p",[e._v("在单体结构中，组件之间的交互一般情况下都只是普通的函数调用，迅速而廉价，这就意味着这种跨源码层次解耦边界的通信会很频繁。")])]),e._v(" "),a("p",[e._v("Since the deployment of monoliths usually requires compilation and static linking, components in these systems are typically delivered as source code.")]),e._v(" "),a("blockquote",[a("p",[e._v("由于单体结构的部署需要编译所有源码，并且进行静态链接，这就意味着这些系统中的组件一般都会以源码形式交付。")])]),e._v(" "),a("h2",{attrs:{id:"deployment-components-部署层次的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment-components-部署层次的组件"}},[e._v("#")]),e._v(" DEPLOYMENT COMPONENTS 部署层次的组件")]),e._v(" "),a("p",[e._v("The simplest physical representation of an architectural boundary is a dynamically linked library like a .Net DLL, a Java jar file, a Ruby Gem, or a UNIX shared library. Deployment does not involve compilation. Instead, the components are delivered in binary, or some equivalent deployable form. This is the deployment-level decoupling mode. The act of deployment is simply the gathering of these deployable units together in some convenient form, such as a WAR file, or even just a directory.")]),e._v(" "),a("blockquote",[a("p",[e._v("下面我们来看看系统架构最常见的物理边界形式：动态链接库。这种形式包括 .Net 的 DLL、Java 的 jar 文件、Ruby Gem 以及 UNIX 的共享库等。这种类型的组件在部署时不需要重新编译，因为它们都是以二进制形式或其他等价的可部署形式交付的。这里采用的就是部署层次上的解耦模式。部署这种类型的项目，就是将其所有可部署的单元打包成一个便于操作的文件格式，例如 WAR 文件，甚至可以只是一个目录（或者文件夹）。")])]),e._v(" "),a("p",[e._v("With that one exception, deployment-level components are the same as monoliths. The functions generally all exist in the same processor and address space. The strategies for segregating the components and managing their dependencies are the same.2")]),e._v(" "),a("blockquote",[a("p",[e._v("除这一点以外，这种按部署层次解耦的组件与单体结构几乎是一样的，其所有的函数仍然处于同一个进程、同一个地址空间中。管理组件划分依赖关系的策略也基本上是和上文一致的。")])]),e._v(" "),a("p",[e._v("As with monoliths, communications across deployment component boundaries are just function calls and, therefore, are very inexpensive. There may be a one-time hit for dynamic linking or runtime loading, but communications across these boundaries can still be very chatty.")]),e._v(" "),a("blockquote",[a("p",[e._v("与单体结构类似，按部署层次解耦的组件之间的跨也界调用也只是普通的函数调用，成本很低。虽然动态链接或运行时加载的过程本身可能会有一个一次性的调用成本，但它们之间的跨边界通信调用依然会很频繁。")])]),e._v(" "),a("h2",{attrs:{id:"threads-线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#threads-线程"}},[e._v("#")]),e._v(" THREADS 线程")]),e._v(" "),a("p",[e._v("Both monoliths and deployment components can make use of threads. Threads are not architectural boundaries or units of deployment, but rather a way to organize the schedule and order of execution. They may be wholly contained within a component, or spread across many components.")]),e._v(" "),a("blockquote",[a("p",[e._v("单体结构和按部署层次划分的组件都可以采用线程模型。当然，线程既不属于架构边界，也不属于部署单元，它们仅仅是一种管理并调度程序执行的方式。一个线程既可以被包含在单一组件中，也可以横跨多个组件。")])]),e._v(" "),a("h2",{attrs:{id:"local-processes-本地进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-processes-本地进程"}},[e._v("#")]),e._v(" LOCAL PROCESSES 本地进程")]),e._v(" "),a("p",[e._v("A much stronger physical architectural boundary is the local process. A local process is typically created from the command line or an equivalent system call. Local processes run in the same processor, or in the same set of processors within a multicore, but run in separate address spaces. Memory protection generally prevents such processes from sharing memory, although shared memory partitions are often used.")]),e._v(" "),a("blockquote",[a("p",[e._v("系统架构还有一个更明显的物理边界形式，那就是本地进程。本地进程一般是由命令行启动或其他等价的系统调用产生的。本地进程往往运行于单个处理器或多核系统的同一组处理器上，但它们拥有各自不同的地址空间。一般来说，现有的内存保护机制会使这些进程无法共享其内存，但它们通常可以用某种独立的内存区域来实现共享。")])]),e._v(" "),a("p",[e._v("Most often, local processes communicate with each other using sockets, or some other kind of operating system communications facility such as mailboxes or message queues.")]),e._v(" "),a("blockquote",[a("p",[e._v("最常见的情况是，这些本地进程会用 socket 来实现彼此的通信。当然，它们也可以通过一些操作系统提供的方式来通信，例如共享邮件或消息队列。")])]),e._v(" "),a("p",[e._v("Each local process may be a statically linked monolith, or it may be composed of dynamically linked deployment components. In the former case, several monolithic processes may have the same components compiled and linked into them. In the latter, they may share the same dynamically linked deployment components.")]),e._v(" "),a("blockquote",[a("p",[e._v("每个本地进程都既可以是一个静态链接的单体结构，也可以是一个由动态链接组件组成的程序。在前一种情况下，若干个单体过程会被链接到同一个组件中。而在后一种情况下，这些单体过程可以共享同一个动态链接的可部署组件。")])]),e._v(" "),a("p",[e._v("Think of a local process as a kind of uber-component: The process consists of lower-level components that manage their dependencies through dynamic polymorphism.")]),e._v(" "),a("blockquote",[a("p",[e._v("我们在这里可以将本地进程看成某种超级组件，该进程由一系列较低层次的组件组成，我们将通过动态形式的多态来管理它们之间的依赖关系。")])]),e._v(" "),a("p",[e._v("The segregation strategy between local processes is the same as for monoliths and binary components. Source code dependencies point in the same direction across the boundary, and always toward the higher-level component.")]),e._v(" "),a("blockquote",[a("p",[e._v("另外.本地进程之间的隔离策略也与单体结构、二进制组件基本相同，其源码中的依赖关系跨越架构边界的方向是一致的，始终指向更高层次的组件。")])]),e._v(" "),a("p",[e._v("For local processes, this means that the source code of the higher-level processes must not contain the names, or physical addresses, or registry lookup keys of lower-level processes. Remember that the architectural goal is for lower-level processes to be plugins to higher-level processes.")]),e._v(" "),a("blockquote",[a("p",[e._v("对本地进程来说，这就意味着高层进程的源码中不应该包含底层进程的名字、物理内存地址或是注册表键名。请渎职务必要记住，该系统架构的设计目标是让低层进程成为高层进程的一个插件。")])]),e._v(" "),a("p",[e._v("Communication across local process boundaries involve operating system calls, data marshaling and decoding, and interprocess context switches, which are moderately expensive. Chattiness should be carefully limited.")]),e._v(" "),a("blockquote",[a("p",[e._v("本地进程之间的跨边界通信需要用到系统调用、数据的编码和解码，以及进程间的上下文切换，成本相对来说会更高一些，所以这里而要谨慎地控制通信的次数。")])]),e._v(" "),a("h2",{attrs:{id:"services-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#services-服务"}},[e._v("#")]),e._v(" SERVICES 服务")]),e._v(" "),a("p",[e._v("The strongest boundary is a service. A service is a process, generally started from the command line or through an equivalent system call. Services do not depend on their physical location. Two communicating services may, or may not, operate in the same physical processor or multicore. The services assume that all communications take place over the network.")]),e._v(" "),a("blockquote",[a("p",[e._v("系统架构中最强的边界形式就是服务。一个服务就是一个进程，它们通常由命令行环境或其他等价的系统调用来产生。服务并不依赖于具体的运行位置，两个互相通信的服务既可以处于单一物理处理器或多核系统的同一组处理器上，也可以彼此位于不同的处理器上。服务会始终假设它们之间的通信将全部通过网络进行。")])]),e._v(" "),a("p",[e._v("Communications across service boundaries are very slow compared to function calls. Turnaround times can range from tens of milliseconds to seconds. Care must be taken to avoid chatting where possible. Communications at this level must deal with high levels of latency.")]),e._v(" "),a("blockquote",[a("p",[e._v("服务之间的跨边界通信相对于函数调用来说，速度是非常缓慢的，其往返时间可以从几十毫秒到几秒不等。因此我们在划分架构边界时，一定要尽可能地控制通信次数。在这个层次上通信必须能够适应高延时情况。")])]),e._v(" "),a("p",[e._v("Otherwise, the same rules apply to services as apply to local processes. Lower-level services should “plug in” to higher-level services. The source code of higher-level services must not contain any specific physical knowledge (e.g., a URI) of any lower-level service.")]),e._v(" "),a("blockquote",[a("p",[e._v("除此之外，我们可以在服务层次上使用与本地进程相同的规则。也就是让较低层次服务成为较高层次服务的“插件”。为此，我们要确保高层服务的源码中没有包含任何与低层服务相关的物理信息（例如 URI）。")])]),e._v(" "),a("h2",{attrs:{id:"conclusion-本章小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion-本章小结"}},[e._v("#")]),e._v(" CONCLUSION 本章小结")]),e._v(" "),a("p",[e._v("Most systems, other than monoliths, use more than one boundary strategy. A system that makes use of service boundaries may also have some local process boundaries. Indeed, a service is often just a facade for a set of interacting local processes. A service, or a local process, will almost certainly be either a monolith composed of source code components or a set of dynamically linked deployment components.")]),e._v(" "),a("blockquote",[a("p",[e._v("除单体结构以外，大部分系统都会同时采用多种边界划分策略。一个按照服务层次划分边界的系统也可能会在某一部分采用本地进程的边界划分模式。事实上，服务经常不过就是一系列互相作用的本地进程的某种外在形式。无论是服务还是本地进程，它们几乎肯定都是由一个或多个源码组件组成的单体结构，或者一组动态链接的可部署组件。")])]),e._v(" "),a("p",[e._v("This means that the boundaries in a system will often be a mixture of local chatty boundaries and boundaries that are more concerned with latency.")]),e._v(" "),a("blockquote",[a("p",[e._v("这也意味着一个系统中通常会同时包含高通信量、低延迟的本地架构边界和低通信量、高延迟的服务边界。")])])],1)}),[],!1,null,null,null);o.default=s.exports}}]);