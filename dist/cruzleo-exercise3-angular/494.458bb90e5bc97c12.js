"use strict";(self.webpackChunkcruzleo_exercise3_angular=self.webpackChunkcruzleo_exercise3_angular||[]).push([[494],{4494:(uo,ce,c)=>{c.r(ce),c.d(ce,{BookModule:()=>lo});var C=c(6895),t=c(4650),O=c(8505),ue=c(529);let he=(()=>{class o{constructor(e){this.http=e,this.serverUrl="http://localhost:3000",this.getBooks=()=>this.http.get(`${this.serverUrl}/books`).pipe((0,O.b)(n=>n)),this.deleteBook=n=>this.http.delete(`${this.serverUrl}/books/${n}`).pipe((0,O.b)(r=>console.log("Successfully delete book",n))),this.addBook=n=>this.http.post(`${this.serverUrl}/books`,n).pipe((0,O.b)(r=>{console.log("Successfully added book")})),this.updateBook=(n,r)=>this.http.patch(`${this.serverUrl}/books/${r}`,n).pipe((0,O.b)(a=>{console.log("Successfully updated book")})),this.getBookById=n=>this.http.get(`${this.serverUrl}/books/${n}`).pipe((0,O.b)(r=>r))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(ue.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var E=c(8996),Le=c(9955),He=c(9835),k=c(3546),$=c(4859);let Pe=(()=>{class o{constructor(){this.editActionEmitter=new t.vpe,this.deleteActionEmitter=new t.vpe,this.editBook=e=>{this.editActionEmitter.emit(this.book)},this.deleteBook=e=>{this.deleteActionEmitter.emit(this.book)}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-book-item"]],inputs:{book:["booksInput","book"]},outputs:{editActionEmitter:"editActionEmitter",deleteActionEmitter:"deleteActionEmitter"},decls:19,vars:3,consts:[[1,"card-container"],[1,"card-content"],[1,"btn-container"],["mat-flat-button","","color","primary",1,"btn",3,"click"],["mat-flat-button","","color","warn",1,"btn",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA()(),t.TgZ(4,"mat-card-content")(5,"div",1)(6,"p")(7,"b"),t._uU(8,"Author(s):"),t.qZA(),t._uU(9),t.qZA(),t.TgZ(10,"p")(11,"b"),t._uU(12,"ISBN:"),t.qZA(),t._uU(13),t.qZA()()(),t.TgZ(14,"mat-card-actions",2)(15,"button",3),t.NdJ("click",function(){return n.editBook(null==n.book?null:n.book.id)}),t._uU(16," EDIT "),t.qZA(),t.TgZ(17,"button",4),t.NdJ("click",function(){return n.deleteBook(null==n.book?null:n.book.id)}),t._uU(18," DELETE "),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(null==n.book?null:n.book.name),t.xp6(6),t.hij(" ",null==n.book?null:n.book.authors,""),t.xp6(4),t.hij(" ",null==n.book?null:n.book.isbn,""))},dependencies:[k.a8,k.hq,k.dn,k.dk,k.n5,$.lW],styles:[".card-container[_ngcontent-%COMP%]{width:15rem;height:18rem;margin:.5rem;padding:1rem}.btn-container[_ngcontent-%COMP%]{bottom:0;position:absolute;margin-bottom:1.5rem;gap:.5rem;margin-left:1rem}.btn[_ngcontent-%COMP%]{height:2rem}.card-content[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:1rem}"]}),o})();function Ze(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"app-book-item",4),t.NdJ("editActionEmitter",function(){const a=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.executeEdit(a.id))})("deleteActionEmitter",function(){const a=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.executeDelete(a.id))}),t.qZA()()}if(2&o){const e=i.$implicit;t.xp6(1),t.Q6J("booksInput",e)}}let Ye=(()=>{class o{constructor(e,n,r){this.bookService=e,this.router=n,this.authService=r,this.books=[],this.executeEdit=a=>{this.router.navigate(["book/form"],{queryParams:{id:a}})},this.executeDelete=a=>{console.log("delete blog",a),this.bookSub=this.bookService.deleteBook(a).subscribe(),this.bookSub=this.bookService.getBooks().subscribe(s=>{this.books=s})},this.executeAdd=()=>{this.router.navigate(["book/form"])},this.executeDeleteAll=()=>{console.log("delete all"),this.books.map(s=>s.id).forEach(s=>{this.bookSub=this.bookService.deleteBook(s).subscribe()}),this.bookSub=this.bookService.getBooks().subscribe(s=>{this.books=s})},this.executeLogout=()=>{this.authService.logout(),this.router.navigate(["login"])}}ngOnInit(){this.bookSub=this.bookService.getBooks().subscribe(e=>{this.books=e})}ngOnDestroy(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(he),t.Y36(E.F0),t.Y36(Le.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-book-list"]],decls:3,vars:1,consts:[[3,"addEmitter","deleteAllEmiiter","logoutEmitter"],[1,"container"],["class","card-container",4,"ngFor","ngForOf"],[1,"card-container"],[3,"booksInput","editActionEmitter","deleteActionEmitter"]],template:function(e,n){1&e&&(t.TgZ(0,"app-command-bar",0),t.NdJ("addEmitter",function(){return n.executeAdd()})("deleteAllEmiiter",function(){return n.executeDeleteAll()})("logoutEmitter",function(){return n.executeLogout()}),t.qZA(),t.TgZ(1,"div",1),t.YNc(2,Ze,2,1,"div",2),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",n.books))},dependencies:[C.sg,He.H,Pe],styles:[".container[_ngcontent-%COMP%]{margin:1.5rem .5rem;display:grid;grid-template-columns:auto auto auto auto;justify-content:center;align-items:center;min-height:100%}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;min-height:100%}"]}),o})();var m=c(4006),fe=c(7676),me=c(4144);function Ge(o,i){1&o&&(t.TgZ(0,"div",17),t._uU(1," Book name is required "),t.qZA())}function je(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,Ge,2,0,"div",16),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.name||null==e.name.errors?null:e.name.errors.required)}}function Ue(o,i){1&o&&(t.TgZ(0,"div",17),t._uU(1," ISBN is required "),t.qZA())}function We(o,i){1&o&&(t.TgZ(0,"div",17),t._uU(1," ISBN is invalid "),t.qZA())}function qe(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,Ue,2,0,"div",16),t.YNc(2,We,2,0,"div",16),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.isbn||null==e.isbn.errors?null:e.isbn.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.isbn||null==e.isbn.errors?null:e.isbn.errors.maxlength)}}function $e(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div")(2,"mat-form-field",18),t._UZ(3,"input",19),t.qZA(),t.TgZ(4,"button",20),t.NdJ("click",function(){const a=t.CHM(e).index,s=t.oxw();return t.KtG(s.deleteAuthor(a))}),t._uU(5,"Delete"),t.qZA()()()}if(2&o){const e=i.index;t.xp6(3),t.Q6J("formControlName",e)}}const Je=[{path:"",component:Ye},{path:"form",component:(()=>{class o{constructor(e,n,r,a){this.fb=e,this.route=n,this.router=r,this.bookService=a,this.id=0,this.deleteAuthor=s=>{this.authorsFormArray.removeAt(s)},this.addAuthor=()=>{this.authorsFormArray.push(new m.NI)},this.onSubmit=()=>{let s=this.bookForm.get("name")?.errors,l=this.bookForm.get("isbn")?.errors,d=this.bookForm.get("authors")?.errors;if(s||l||d)console.log("Error with inputs");else if(this.id){const u=this.bookForm.getRawValue();this.bookService.updateBook(u,this.id).subscribe(),this.router.navigate(["book"])}else{const u=this.bookForm.getRawValue();this.bookService.addBook(u).subscribe(),this.router.navigate(["book"])}},this.bookForm=e.group({name:["",[m.kI.required]],authors:e.array([new m.NI],m.kI.required),isbn:["",[m.kI.required,m.kI.maxLength(10)]]}),this.authorsFormArray=this.bookForm.controls.authors}ngOnInit(){const e=this.route.snapshot.queryParamMap.get("id");this.id=parseInt(e),this.id&&this.bookService.getBookById(this.id).subscribe(n=>{this.bookForm.setValue({name:n.name,authors:[""],isbn:n.isbn}),n.authors.forEach(r=>{this.authorsFormArray.push(new m.NI(r))}),this.authorsFormArray.removeAt(0)})}get name(){return this.bookForm.get("name")}get isbn(){return this.bookForm.get("isbn")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.qu),t.Y36(E.gz),t.Y36(E.F0),t.Y36(he))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-book-form"]],decls:26,vars:4,consts:[[1,"container"],[1,"form-container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["appearance","outline",1,"input-field"],["type","text","matInput","","formControlName","name","required",""],[4,"ngIf"],["for","isbn"],["type","text","matInput","","formControlName","isbn"],["formArrayName","authors"],["for","authors"],[4,"ngFor","ngForOf"],["type","button","mat-raised-button","",3,"click"],[1,"btn-container"],["mat-raised-button","","color","primary","type","submit"],["class","error",4,"ngIf"],[1,"error"],["appearance","outline"],["type","text","matInput","",3,"formControlName"],["mat-button","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(3,"div",3)(4,"h4",4),t._uU(5,"Book Name"),t.qZA(),t.TgZ(6,"mat-form-field",5),t._UZ(7,"input",6),t.qZA(),t.YNc(8,je,2,1,"div",7),t.qZA(),t.TgZ(9,"div",3)(10,"h4",8),t._uU(11,"ISBN"),t.qZA(),t.TgZ(12,"mat-form-field",5),t._UZ(13,"input",9),t.qZA(),t.YNc(14,qe,3,2,"div",7),t.qZA(),t.ynx(15,10),t.TgZ(16,"h4",11),t._uU(17,"Authors"),t.qZA(),t.YNc(18,$e,6,1,"div",12),t.TgZ(19,"button",13),t.NdJ("click",function(){return n.addAuthor()}),t._uU(20," Add Author "),t.qZA(),t.BQk(),t._UZ(21,"br")(22,"br"),t.TgZ(23,"div",14)(24,"button",15),t._uU(25,"Submit"),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",n.bookForm),t.xp6(6),t.Q6J("ngIf",(null==n.name?null:n.name.invalid)&&(null==n.name?null:n.name.dirty)),t.xp6(6),t.Q6J("ngIf",(null==n.isbn?null:n.isbn.invalid)&&(null==n.isbn?null:n.isbn.dirty)),t.xp6(4),t.Q6J("ngForOf",n.authorsFormArray.controls))},dependencies:[C.sg,C.O5,k.a8,$.lW,m._Y,m.Fj,m.JJ,m.JL,m.Q7,m.sg,m.u,m.CE,fe.KE,me.Nt],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:.5rem;height:100%}.form-container[_ngcontent-%COMP%]{margin:.5rem;padding:2rem;width:30%}.form-group[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:100%}.btn-container[_ngcontent-%COMP%]{text-align:center;width:100%}.input-field[_ngcontent-%COMP%]{width:100%;height:4rem}.error[_ngcontent-%COMP%]{font-size:medium;border-radius:3%;border:1px solid red;text-align:center;width:100%;height:2rem;padding-top:1rem;background-color:#f7aeae}"]}),o})()}];let Qe=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[E.Bz.forChild(Je),C.ez,E.Bz]}),o})();var S=c(445),x=c(1281),w=(c(5017),c(3353)),R=c(7579),J=c(9646),N=c(9751),_e=c(4968),pe=c(4408),ge=c(727);const B={schedule(o){let i=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:n}=B;n&&(i=n.requestAnimationFrame,e=n.cancelAnimationFrame);const r=i(a=>{e=void 0,o(a)});return new ge.w0(()=>e?.(r))},requestAnimationFrame(...o){const{delegate:i}=B;return(i?.requestAnimationFrame||requestAnimationFrame)(...o)},cancelAnimationFrame(...o){const{delegate:i}=B;return(i?.cancelAnimationFrame||cancelAnimationFrame)(...o)},delegate:void 0};var we=c(640);const et=new class Ke extends we.v{flush(i){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let r;i=i||n.shift();do{if(r=i.execute(i.state,i.delay))break}while((i=n[0])&&i.id===e&&n.shift());if(this._active=!1,r){for(;(i=n[0])&&i.id===e&&n.shift();)i.unsubscribe();throw r}}}(class Xe extends pe.o{constructor(i,e){super(i,e),this.scheduler=i,this.work=e}requestAsyncId(i,e,n=0){return null!==n&&n>0?super.requestAsyncId(i,e,n):(i.actions.push(this),i._scheduled||(i._scheduled=B.requestAnimationFrame(()=>i.flush(void 0))))}recycleAsyncId(i,e,n=0){var r;if(null!=n?n>0:this.delay>0)return super.recycleAsyncId(i,e,n);const{actions:a}=i;null!=e&&(null===(r=a[a.length-1])||void 0===r?void 0:r.id)!==e&&(B.cancelAnimationFrame(e),i._scheduled=void 0)}});let Q,tt=1;const V={};function be(o){return o in V&&(delete V[o],!0)}const ot={setImmediate(o){const i=tt++;return V[i]=!0,Q||(Q=Promise.resolve()),Q.then(()=>be(i)&&o()),i},clearImmediate(o){be(o)}},{setImmediate:nt,clearImmediate:it}=ot,L={setImmediate(...o){const{delegate:i}=L;return(i?.setImmediate||nt)(...o)},clearImmediate(o){const{delegate:i}=L;return(i?.clearImmediate||it)(o)},delegate:void 0},st=new class at extends we.v{flush(i){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let r;i=i||n.shift();do{if(r=i.execute(i.state,i.delay))break}while((i=n[0])&&i.id===e&&n.shift());if(this._active=!1,r){for(;(i=n[0])&&i.id===e&&n.shift();)i.unsubscribe();throw r}}}(class rt extends pe.o{constructor(i,e){super(i,e),this.scheduler=i,this.work=e}requestAsyncId(i,e,n=0){return null!==n&&n>0?super.requestAsyncId(i,e,n):(i.actions.push(this),i._scheduled||(i._scheduled=L.setImmediate(i.flush.bind(i,void 0))))}recycleAsyncId(i,e,n=0){var r;if(null!=n?n>0:this.delay>0)return super.recycleAsyncId(i,e,n);const{actions:a}=i;null!=e&&(null===(r=a[a.length-1])||void 0===r?void 0:r.id)!==e&&(L.clearImmediate(e),i._scheduled===e&&(i._scheduled=void 0))}});var lt=c(4986),dt=c(4482),ct=c(8421),ve=c(5403),ht=c(5963);function X(o,i=lt.z){return function ut(o){return(0,dt.e)((i,e)=>{let n=!1,r=null,a=null,s=!1;const l=()=>{if(a?.unsubscribe(),a=null,n){n=!1;const u=r;r=null,e.next(u)}s&&e.complete()},d=()=>{a=null,s&&e.complete()};i.subscribe((0,ve.x)(e,u=>{n=!0,r=u,a||(0,ct.Xf)(o(u)).subscribe(a=(0,ve.x)(e,l,d))},()=>{s=!0,(!n||!a||a.closed)&&e.complete()}))})}(()=>(0,ht.H)(o,i))}var ft=c(9300),D=c(2722),mt=c(8675);const _t=["contentWrapper"],pt=["*"],gt=new t.OlP("VIRTUAL_SCROLL_STRATEGY");let K=(()=>{class o{constructor(e,n,r){this._ngZone=e,this._platform=n,this._scrolled=new R.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new N.y(n=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe(X(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,J.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){const r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe((0,ft.h)(a=>!a||r.indexOf(a)>-1))}getAncestorScrollContainers(e){const n=[];return this.scrollContainers.forEach((r,a)=>{this._scrollableContainsElement(a,e)&&n.push(a)}),n}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,n){let r=(0,x.fI)(n),a=e.getElementRef().nativeElement;do{if(r==a)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,_e.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(t.R0b),t.LFG(w.t4),t.LFG(C.K0,8))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),Ce=(()=>{class o{constructor(e,n,r,a){this.elementRef=e,this.scrollDispatcher=n,this.ngZone=r,this.dir=a,this._destroyed=new R.x,this._elementScrolled=new N.y(s=>this.ngZone.runOutsideAngular(()=>(0,_e.R)(this.elementRef.nativeElement,"scroll").pipe((0,D.R)(this._destroyed)).subscribe(s)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const n=this.elementRef.nativeElement,r=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=r?e.end:e.start),null==e.right&&(e.right=r?e.start:e.end),null!=e.bottom&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&0!=(0,w._i)()?(null!=e.left&&(e.right=n.scrollWidth-n.clientWidth-e.left),2==(0,w._i)()?e.left=e.right:1==(0,w._i)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const n=this.elementRef.nativeElement;(0,w.Mq)()?n.scrollTo(e):(null!=e.top&&(n.scrollTop=e.top),null!=e.left&&(n.scrollLeft=e.left))}measureScrollOffset(e){const n="left",r="right",a=this.elementRef.nativeElement;if("top"==e)return a.scrollTop;if("bottom"==e)return a.scrollHeight-a.clientHeight-a.scrollTop;const s=this.dir&&"rtl"==this.dir.value;return"start"==e?e=s?r:n:"end"==e&&(e=s?n:r),s&&2==(0,w._i)()?e==n?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:s&&1==(0,w._i)()?e==n?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:e==n?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.SBq),t.Y36(K),t.Y36(t.R0b),t.Y36(S.Is,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0}),o})(),ye=(()=>{class o{constructor(e,n,r){this._platform=e,this._change=new R.x,this._changeListener=a=>{this._change.next(a)},this._document=r,n.runOutsideAngular(()=>{if(e.isBrowser){const a=this._getWindow();a.addEventListener("resize",this._changeListener),a.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,n=this._getWindow(),r=e.documentElement,a=r.getBoundingClientRect();return{top:-a.top||e.body.scrollTop||n.scrollY||r.scrollTop||0,left:-a.left||e.body.scrollLeft||n.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(X(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(w.t4),t.LFG(t.R0b),t.LFG(C.K0,8))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const ke=new t.OlP("VIRTUAL_SCROLLABLE");let vt=(()=>{class o extends Ce{constructor(e,n,r,a){super(e,n,r,a)}measureViewportSize(e){const n=this.elementRef.nativeElement;return"horizontal"===e?n.clientWidth:n.clientHeight}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.SBq),t.Y36(K),t.Y36(t.R0b),t.Y36(S.Is,8))},o.\u0275dir=t.lG2({type:o,features:[t.qOj]}),o})();const yt=typeof requestAnimationFrame<"u"?et:st;let kt=(()=>{class o extends vt{get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,x.Ig)(e)}constructor(e,n,r,a,s,l,d,u){super(e,l,r,s),this.elementRef=e,this._changeDetectorRef=n,this._scrollStrategy=a,this.scrollable=u,this._platform=(0,t.f3M)(w.t4),this._detachedSubject=new R.x,this._renderedRangeSubject=new R.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new N.y(h=>this._scrollStrategy.scrolledIndexChange.subscribe(_=>Promise.resolve().then(()=>this.ngZone.run(()=>h.next(_))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=ge.w0.EMPTY,this._viewportChanges=d.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,mt.O)(null),X(0,yt)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,D.R)(this._detachedSubject)).subscribe(n=>{const r=n.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function Ct(o,i){return o.start==i.start&&o.end==i.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,n="to-start"){e=this.appendOnly&&"to-start"===n?0:e;const a="horizontal"==this.orientation,s=a?"X":"Y";let d=`translate${s}(${Number((a&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===n&&(d+=` translate${s}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=d&&(this._renderedContentTransform=d,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,n="auto"){const r={behavior:n};"horizontal"===this.orientation?r.start=e:r.top=e,this.scrollable.scrollTo(r)}scrollToIndex(e,n="auto"){this._scrollStrategy.scrollToIndex(e,n)}measureScrollOffset(e){let n;return n=this.scrollable==this?r=>super.measureScrollOffset(r):r=>this.scrollable.measureScrollOffset(r),Math.max(0,n(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let n;const r="left",a="right",s="rtl"==this.dir?.value;n="start"==e?s?a:r:"end"==e?s?r:a:e||("horizontal"===this.orientation?"left":"top");const l=this.scrollable.measureBoundingClientRectWithScrollOffset(n);return this.elementRef.nativeElement.getBoundingClientRect()[n]-l}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const n of e)n()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(gt,8),t.Y36(S.Is,8),t.Y36(K),t.Y36(ye),t.Y36(ke,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,n){if(1&e&&t.Gf(_t,7),2&e){let r;t.iGM(r=t.CRH())&&(n._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,n){2&e&&t.ekj("cdk-virtual-scroll-orientation-horizontal","horizontal"===n.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==n.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[t._Bn([{provide:Ce,useFactory:(i,e)=>i||e,deps:[[new t.FiY,new t.tBr(ke)],o]}]),t.qOj,t.jDz],ngContentSelectors:pt,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"div",0,1),t.Hsn(2),t.qZA(),t._UZ(3,"div",2)),2&e&&(t.xp6(3),t.Udp("width",n._totalContentWidth)("height",n._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0}),o})(),Re=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})(),Rt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[S.vT,Re,kt,S.vT,Re]}),o})();c(2076),c(1135),c(576),c(5698);let Pt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[Rt]}),o})();var Ee=c(3238);let io=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[Ee.BQ,Pt,Ee.BQ]}),o})();var ao=c(4850),so=c(4466);let lo=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[C.ez,Qe,io,k.QW,$.ot,ao.t,so.m,m.UX,fe.lN,me.c,ue.JF]}),o})()}}]);