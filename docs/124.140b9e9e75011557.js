"use strict";(self.webpackChunkcruzleo_exercise3_angular=self.webpackChunkcruzleo_exercise3_angular||[]).push([[124],{9124:(gt,A,a)=>{a.r(A),a.d(A,{BlogModule:()=>mt});var m=a(6895),v=a(8996),t=a(4650),U=a(7579),g=a(8505),C=a(529);let T=(()=>{class o{constructor(e){this.http=e,this.serverUrl="http://localhost:3000",this.blogsSubject=new U.x,this.getBlogs=()=>this.http.get(`${this.serverUrl}/blogs`).pipe((0,g.b)(n=>n)),this.deleteBlog=n=>this.http.delete(`${this.serverUrl}/blogs/${n}`).pipe((0,g.b)(i=>console.log("Successfully delete blog",n))),this.addBlog=n=>this.http.post(`${this.serverUrl}/blogs`,n).pipe((0,g.b)(i=>{console.log("Successfully added blog")})),this.updateBlog=(n,i)=>this.http.patch(`${this.serverUrl}/blogs/${i}`,n).pipe((0,g.b)(r=>{console.log("Successfully updated blog")})),this.getBlogById=n=>this.http.get(`${this.serverUrl}/blogs/${n}`).pipe((0,g.b)(i=>i))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(C.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var P=a(9955),D=a(9835),d=a(3546),N=a(4850),E=a(4859);function q(o,l){if(1&o&&(t.TgZ(0,"div")(1,"span"),t._uU(2),t.qZA()()),2&o){const e=l.$implicit;t.xp6(2),t.Oqu(e)}}let z=(()=>{class o{constructor(){this.editBlogEmmitter=new t.vpe,this.deleteBlogEmmiter=new t.vpe,this.editBlog=e=>this.editBlogEmmitter.emit(this.blog),this.deleteBlog=e=>this.deleteBlogEmmiter.emit(this.blog)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-item"]],inputs:{blog:["blogsInput","blog"]},outputs:{editBlogEmmitter:"editBlogEmmitter",deleteBlogEmmiter:"deleteBlogEmmiter"},decls:19,vars:4,consts:[[1,"card-container"],[1,"card-header"],[1,"card-content"],[1,"comment-container"],[4,"ngFor","ngForOf"],["align","end"],["mat-flat-button","","color","primary",1,"btn",3,"click"],["mat-flat-button","","color","warn",1,"btn",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header",1)(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA()(),t.TgZ(6,"mat-card-content",2)(7,"p"),t._uU(8),t.qZA()(),t._UZ(9,"mat-divider"),t.TgZ(10,"mat-card-content",3)(11,"p"),t._uU(12,"Comments:"),t.qZA(),t.YNc(13,q,3,1,"div",4),t.qZA(),t.TgZ(14,"mat-card-actions",5)(15,"button",6),t.NdJ("click",function(){return n.editBlog(null==n.blog?null:n.blog.id)}),t._uU(16," EDIT "),t.qZA(),t.TgZ(17,"button",7),t.NdJ("click",function(){return n.deleteBlog(null==n.blog?null:n.blog.id)}),t._uU(18," DELETE "),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(null==n.blog?null:n.blog.title),t.xp6(2),t.Oqu(null==n.blog?null:n.blog.author),t.xp6(3),t.Oqu(null==n.blog?null:n.blog.description),t.xp6(5),t.Q6J("ngForOf",null==n.blog?null:n.blog.comments))},dependencies:[m.sg,d.a8,d.hq,d.dn,d.dk,d.$j,d.n5,N.d,E.lW],styles:[".card-container[_ngcontent-%COMP%]{width:80%;margin:1rem auto;padding:1rem 1.5rem}.card-header[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]{margin-bottom:1.5rem}.btn[_ngcontent-%COMP%]{margin-right:.5rem;height:2rem}.comment-container[_ngcontent-%COMP%]{margin-top:1rem}"]}),o})();function Y(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"app-blog-item",3),t.NdJ("editBlogEmmitter",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.executeEdit(null==r?null:r.id))})("deleteBlogEmmiter",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.executeDelete(null==r?null:r.id))}),t.qZA()()}if(2&o){const e=l.$implicit;t.xp6(1),t.Q6J("blogsInput",e)}}let $=(()=>{class o{constructor(e,n,i){this.blogService=e,this.router=n,this.authService=i,this.blogs=[],this.executeEdit=r=>{this.router.navigate(["blog/form"],{queryParams:{id:r}})},this.executeDelete=r=>{console.log("delete blog",r),this.blogsSub=this.blogService.deleteBlog(r).subscribe(),this.blogsSub?.unsubscribe(),this.blogsSub=this.blogService.getBlogs().subscribe(s=>{this.blogs=s})},this.executeAdd=()=>{this.router.navigate(["blog/form"])},this.executeDeleteAll=()=>{console.log("delete all"),this.blogs.map(s=>s.id).forEach(s=>{this.blogsSub=this.blogService.deleteBlog(s).subscribe()}),this.blogsSub?.unsubscribe(),this.blogsSub=this.blogService.getBlogs().subscribe(s=>{this.blogs=s})},this.executeLogout=()=>{this.authService.logout(),this.router.navigate(["login"])}}ngOnInit(){this.blogsSub=this.blogService.getBlogs().subscribe(e=>{this.blogs=e})}ngOnDestroy(){this.blogsSub?.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T),t.Y36(v.F0),t.Y36(P.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-list"]],decls:3,vars:1,consts:[[3,"addEmitter","deleteAllEmiiter","logoutEmitter"],[1,"container"],[4,"ngFor","ngForOf"],[3,"blogsInput","editBlogEmmitter","deleteBlogEmmiter"]],template:function(e,n){1&e&&(t.TgZ(0,"app-command-bar",0),t.NdJ("addEmitter",function(){return n.executeAdd()})("deleteAllEmiiter",function(){return n.executeDeleteAll()})("logoutEmitter",function(){return n.executeLogout()}),t.qZA(),t.TgZ(1,"div",1),t.YNc(2,Y,2,1,"div",2),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",n.blogs))},dependencies:[m.sg,D.H,z],styles:[".container[_ngcontent-%COMP%]{justify-content:center;align-items:center;margin:1.5rem 1rem;min-height:auto}"]}),o})();var u=a(4006),B=a(7676),x=a(4144);function J(o,l){1&o&&(t.TgZ(0,"div",19),t._uU(1," Blog title is required "),t.qZA())}function H(o,l){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,J,2,0,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.title||null==e.title.errors?null:e.title.errors.required)}}function W(o,l){1&o&&(t.TgZ(0,"div",19),t._uU(1," Author is required "),t.qZA())}function j(o,l){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,W,2,0,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.author||null==e.author.errors?null:e.author.errors.required)}}function G(o,l){1&o&&(t.TgZ(0,"div",19),t._uU(1," Description is required "),t.qZA())}function Q(o,l){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,G,2,0,"div",18),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.description||null==e.description.errors?null:e.description.errors.required)}}function V(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div")(2,"mat-form-field",20),t._UZ(3,"input",21),t.qZA(),t.TgZ(4,"button",22),t.NdJ("click",function(){const r=t.CHM(e).index,s=t.oxw();return t.KtG(s.deleteComment(r))}),t._uU(5,"Delete"),t.qZA()()()}if(2&o){const e=l.index;t.xp6(3),t.Q6J("formControlName",e)}}const k=[{path:"",component:$},{path:"form",component:(()=>{class o{constructor(e,n,i,r){this.fb=e,this.blogService=n,this.router=i,this.route=r,this.id=0,this.deleteComment=s=>{this.commentsFormArray.removeAt(s)},this.addComment=()=>{this.commentsFormArray.push(new u.NI)},this.onSubmit=()=>{let s=this.blogForm.get("title")?.errors,c=this.blogForm.get("description")?.errors,p=this.blogForm.get("author")?.errors;if(s||p||c)console.log("Error with inputs");else if(this.id){const h=this.blogForm.getRawValue();this.blogService.updateBlog(h,this.id).subscribe(),this.router.navigate(["blog"])}else{const h=this.blogForm.getRawValue();this.blogService.addBlog(h).subscribe(),this.router.navigate(["blog"])}},this.blogForm=e.group({title:["",[u.kI.required]],description:["",[u.kI.required]],author:["",[u.kI.required]],comments:e.array([new u.NI])}),this.commentsFormArray=this.blogForm.controls.comments}ngOnInit(){const e=this.route.snapshot.queryParamMap.get("id");this.id=parseInt(e),this.id&&this.blogService.getBlogById(this.id).subscribe(n=>{this.blogForm.setValue({title:n.title,description:n.description,author:n.author,comments:[""]}),n.comments.forEach(i=>{this.commentsFormArray.push(new u.NI(i))}),this.commentsFormArray.removeAt(0)})}get title(){return this.blogForm.get("title")}get description(){return this.blogForm.get("description")}get author(){return this.blogForm.get("author")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.qu),t.Y36(T),t.Y36(v.F0),t.Y36(v.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-form"]],decls:33,vars:5,consts:[[1,"container"],[1,"form-container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","title"],["appearance","outline",1,"input-field"],["type","text","matInput","","formControlName","title","required",""],[4,"ngIf"],["for","author"],["type","text","matInput","","formControlName","author"],["for","description"],["type","text","matInput","","formControlName","description"],["formArrayName","comments"],["for","comments"],[4,"ngFor","ngForOf"],["type","button","mat-raised-button","",3,"click"],[1,"btn-container"],["mat-raised-button","","color","primary","type","submit"],["class","error",4,"ngIf"],[1,"error"],["appearance","outline",1,"comments-field"],["type","text","matInput","",3,"formControlName"],["mat-button","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(3,"div",3)(4,"h4",4),t._uU(5,"Title"),t.qZA(),t.TgZ(6,"mat-form-field",5),t._UZ(7,"input",6),t.qZA(),t.YNc(8,H,2,1,"div",7),t.qZA(),t.TgZ(9,"div",3)(10,"h4",8),t._uU(11,"Author"),t.qZA(),t.TgZ(12,"mat-form-field",5),t._UZ(13,"input",9),t.qZA(),t.YNc(14,j,2,1,"div",7),t.qZA(),t.TgZ(15,"div",3)(16,"h4",10),t._uU(17,"Description"),t.qZA(),t.TgZ(18,"mat-form-field",5),t._UZ(19,"textarea",11),t.qZA(),t.YNc(20,Q,2,1,"div",7),t.qZA(),t._UZ(21,"br"),t.ynx(22,12),t.TgZ(23,"h4",13),t._uU(24,"Comments"),t.qZA(),t.YNc(25,V,6,1,"div",14),t.TgZ(26,"button",15),t.NdJ("click",function(){return n.addComment()}),t._uU(27," Add Comment "),t.qZA(),t.BQk(),t._UZ(28,"br")(29,"br"),t.TgZ(30,"div",16)(31,"button",17),t._uU(32,"Submit"),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",n.blogForm),t.xp6(6),t.Q6J("ngIf",(null==n.title?null:n.title.invalid)&&(null==n.title?null:n.title.dirty)),t.xp6(6),t.Q6J("ngIf",(null==n.author?null:n.author.invalid)&&(null==n.author?null:n.author.dirty)),t.xp6(6),t.Q6J("ngIf",(null==n.description?null:n.description.invalid)&&(null==n.description?null:n.description.dirty)),t.xp6(5),t.Q6J("ngForOf",n.commentsFormArray.controls))},dependencies:[m.sg,m.O5,d.a8,E.lW,u._Y,u.Fj,u.JJ,u.JL,u.Q7,u.sg,u.u,u.CE,B.KE,x.Nt],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:3rem;min-height:100%}.form-container[_ngcontent-%COMP%]{margin:.5rem;padding:2rem;width:50%}.form-group[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:100%}.btn-container[_ngcontent-%COMP%]{text-align:center;width:100%}.input-field[_ngcontent-%COMP%]{width:100%;height:4rem}.comments-field[_ngcontent-%COMP%]{width:75%}.error[_ngcontent-%COMP%]{font-size:medium;border-radius:3%;border:1px solid red;text-align:center;width:100%;height:2rem;padding-top:1rem;background-color:#f7aeae}"]}),o})()}];let K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[v.Bz.forChild(k),m.ez,v.Bz]}),o})();var M=a(3238);a(9646),a(2843),a(4128),a(4004),a(262),a(8746),a(3099),a(1481);let ct=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[M.BQ,M.BQ]}),o})();var ut=a(4466);let mt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,K,d.QW,N.t,ct,E.ot,ut.m,u.UX,B.lN,x.c,C.JF]}),o})()}}]);