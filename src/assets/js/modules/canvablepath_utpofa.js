/**/ _jsload2 &&
  _jsload2(
    "canvablepath",
    'function Bh(a){a=a.replace(/,/gm," ");a=a.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");a=a.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");a=a.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\\s])/gm,"$1 $2");a=a.replace(/([^\\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2");a=a.replace(/([0-9])([+\\-])/gm,"$1 $2");a=a.replace(/(\\.[0-9]*)(\\.)/gm,"$1 $2");a=a.replace(/([Aa](\\s+[0-9]+){3})\\s+([01])\\s*([01])/gm,"$1 $3 $4 ");a=Bh.JV(a);a=Bh.trim(a);this.FP=new function(a){this.OF= a.split(" ");this.reset=function(){this.th=-1;this.Ut=this.Tw="";this.start=new Bh.eg(0,0);this.Uw=new Bh.eg(0,0);this.qb=new Bh.eg(0,0);this.ja=[];this.Jo=[]};this.kM=function(){return this.th>=this.OF.length-1};this.Aj=function(){return this.kM()?q:this.OF[this.th+1].match(/^[A-Za-z]$/)!=s};this.rE=function(){switch(this.Tw){case "m":case "l":case "h":case "v":case "c":case "s":case "q":case "t":case "a":case "z":return q}return t};this.OL=function(){this.th++;return this.OF[this.th]};this.wj=function(){return parseFloat(this.OL())}; this.zZ=function(){this.Ut=this.Tw;this.Tw=this.OL()};this.Em=function(){return this.hZ(new Bh.eg(this.wj(),this.wj()))};this.yD=function(){var a=this.Em();return this.Uw=a};this.Ck=function(){var a=this.Em();return this.qb=a};this.EL=function(){return"c"!=this.Ut.toLowerCase()&&"s"!=this.Ut.toLowerCase()&&"q"!=this.Ut.toLowerCase()&&"t"!=this.Ut.toLowerCase()?this.qb:new Bh.eg(2*this.qb.x-this.Uw.x,2*this.qb.y-this.Uw.y)};this.hZ=function(a){this.rE()&&(a.x+=this.qb.x,a.y+=this.qb.y);return a};this.hj= function(a,b,f){f!=s&&(0<this.Jo.length&&this.Jo[this.Jo.length-1]==s)&&(this.Jo[this.Jo.length-1]=Math.atan2(f.y-this.ja[this.ja.length-1].y,f.x-this.ja[this.ja.length-1].x));this.TB(a,b==s?s:Math.atan2(a.y-b.y,a.x-b.x))};this.TB=function(a,b){this.ja.push(a);this.Jo.push(b)}}(a);this.jb=function(){return this.ki(s)};this.ki=function(a){var c=this.FP;c.reset();var e=new Bh.kP;for(a!=s&&a.beginPath();!c.kM();)switch(c.zZ(),c.Tw){case "M":case "m":var f=c.Ck();c.hj(f);e.vg(f.x,f.y);a!=s&&a.moveTo(f.x, f.y);for(c.start=c.qb;!c.Aj();)f=c.Ck(),c.hj(f,c.start),e.vg(f.x,f.y),a!=s&&a.lineTo(f.x,f.y);break;case "L":case "l":for(;!c.Aj();){var g=c.qb,f=c.Ck();c.hj(f,g);e.vg(f.x,f.y);a!=s&&a.lineTo(f.x,f.y)}break;case "H":case "h":for(;!c.Aj();)f=new Bh.eg((c.rE()?c.qb.x:0)+c.wj(),c.qb.y),c.hj(f,c.qb),c.qb=f,e.vg(c.qb.x,c.qb.y),a!=s&&a.lineTo(c.qb.x,c.qb.y);break;case "V":case "v":for(;!c.Aj();)f=new Bh.eg(c.qb.x,(c.rE()?c.qb.y:0)+c.wj()),c.hj(f,c.qb),c.qb=f,e.vg(c.qb.x,c.qb.y),a!=s&&a.lineTo(c.qb.x,c.qb.y); break;case "C":case "c":for(;!c.Aj();){var i=c.qb,g=c.Em(),k=c.yD(),f=c.Ck();c.hj(f,k,g);e.RB(i.x,i.y,g.x,g.y,k.x,k.y,f.x,f.y);a!=s&&a.bezierCurveTo(g.x,g.y,k.x,k.y,f.x,f.y)}break;case "S":case "s":for(;!c.Aj();)i=c.qb,g=c.EL(),k=c.yD(),f=c.Ck(),c.hj(f,k,g),e.RB(i.x,i.y,g.x,g.y,k.x,k.y,f.x,f.y),a!=s&&a.bezierCurveTo(g.x,g.y,k.x,k.y,f.x,f.y);break;case "Q":case "q":for(;!c.Aj();)i=c.qb,k=c.yD(),f=c.Ck(),c.hj(f,k,k),e.NJ(i.x,i.y,k.x,k.y,f.x,f.y),a!=s&&a.quadraticCurveTo(k.x,k.y,f.x,f.y);break;case "T":case "t":for(;!c.Aj();)i= c.qb,k=c.EL(),c.Uw=k,f=c.Ck(),c.hj(f,k,k),e.NJ(i.x,i.y,k.x,k.y,f.x,f.y),a!=s&&a.quadraticCurveTo(k.x,k.y,f.x,f.y);break;case "A":case "a":for(;!c.Aj();){var i=c.qb,m=c.wj(),n=c.wj(),g=c.wj()*(Math.PI/180),o=c.wj(),k=c.wj(),f=c.Ck(),p=new Bh.eg(Math.cos(g)*(i.x-f.x)/2+Math.sin(g)*(i.y-f.y)/2,-Math.sin(g)*(i.x-f.x)/2+Math.cos(g)*(i.y-f.y)/2),v=Math.pow(p.x,2)/Math.pow(m,2)+Math.pow(p.y,2)/Math.pow(n,2);1<v&&(m*=Math.sqrt(v),n*=Math.sqrt(v));o=(o==k?-1:1)*Math.sqrt((Math.pow(m,2)*Math.pow(n,2)-Math.pow(m, 2)*Math.pow(p.y,2)-Math.pow(n,2)*Math.pow(p.x,2))/(Math.pow(m,2)*Math.pow(p.y,2)+Math.pow(n,2)*Math.pow(p.x,2)));isNaN(o)&&(o=0);var w=new Bh.eg(o*m*p.y/n,o*-n*p.x/m),i=new Bh.eg((i.x+f.x)/2+Math.cos(g)*w.x-Math.sin(g)*w.y,(i.y+f.y)/2+Math.sin(g)*w.x+Math.cos(g)*w.y),y=function(a,b){return(a[0]*b[0]+a[1]*b[1])/(Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2))*Math.sqrt(Math.pow(b[0],2)+Math.pow(b[1],2)))},z=function(a,b){return(a[0]*b[1]<a[1]*b[0]?-1:1)*Math.acos(y(a,b))},o=z([1,0],[(p.x-w.x)/m,(p.y- w.y)/n]),v=[(p.x-w.x)/m,(p.y-w.y)/n],w=[(-p.x-w.x)/m,(-p.y-w.y)/n],p=z(v,w);-1>=y(v,w)&&(p=Math.PI);1<=y(v,w)&&(p=0);v=1-k?1:-1;w=o+v*(p/2);c.TB(new Bh.eg(i.x+m*Math.cos(w),i.y+n*Math.sin(w)),w-v*Math.PI/2);c.TB(f,w-v*Math.PI);e.vg(f.x,f.y);a!=s&&(y=m>n?m:n,f=m>n?1:m/n,m=m>n?n/m:1,a.translate(i.x,i.y),a.rotate(g),a.scale(f,m),a.arc(0,0,y,o,o+p,1-k),a.scale(1/f,1/m),a.rotate(-g),a.translate(-i.x,-i.y))}break;case "Z":case "z":a!=s&&a.closePath(),c.qb=c.start}return e}} Bh.trim=function(a){return a.replace(/^\\s+|\\s+$/g,"")};Bh.JV=function(a){return a.replace(/[\\s\\r\\t\\n]+/gm," ")};Bh.eg=function(a,b){this.x=a;this.y=b}; Bh.kP=function(){this.Cn=this.Bn=this.Kj=this.Jj=Number.NaN;this.x=u("Jj");this.y=u("Kj");this.width=function(){return this.Bn-this.Jj};this.height=function(){return this.Cn-this.Kj};this.vg=function(a,b){if(a!=s){if(isNaN(this.Jj)||isNaN(this.Bn))this.Bn=this.Jj=a;a<this.Jj&&(this.Jj=a);a>this.Bn&&(this.Bn=a)}if(b!=s){if(isNaN(this.Kj)||isNaN(this.Cn))this.Cn=this.Kj=b;b<this.Kj&&(this.Kj=b);b>this.Cn&&(this.Cn=b)}};this.YB=function(a){this.vg(a,s)};this.ZB=function(a){this.vg(s,a)};this.NJ=function(a, b,c,e,f,g){c=a+2/3*(c-a);e=b+2/3*(e-b);this.RB(a,b,c,c+1/3*(f-a),e,e+1/3*(g-b),f,g)};this.RB=function(a,b,c,e,f,g,i,k){var m=[a,b],n=[c,e],o=[f,g],p=[i,k];this.vg(m[0],m[1]);this.vg(p[0],p[1]);for(Ch=0;1>=Ch;Ch++)if(a=function(a){return Math.pow(1-a,3)*m[Ch]+3*Math.pow(1-a,2)*a*n[Ch]+3*(1-a)*Math.pow(a,2)*o[Ch]+Math.pow(a,3)*p[Ch]},b=6*m[Ch]-12*n[Ch]+6*o[Ch],c=-3*m[Ch]+9*n[Ch]-9*o[Ch]+3*p[Ch],e=3*n[Ch]-3*m[Ch],0==c)0!=b&&(b=-e/b,0<b&&1>b&&(0==Ch&&this.YB(a(b)),1==Ch&&this.ZB(a(b))));else if(e=Math.pow(b, 2)-4*e*c,!(0>e)&&(f=(-b+Math.sqrt(e))/(2*c),0<f&&1>f&&(0==Ch&&this.YB(a(f)),1==Ch&&this.ZB(a(f))),b=(-b-Math.sqrt(e))/(2*c),0<b&&1>b))0==Ch&&this.YB(a(b)),1==Ch&&this.ZB(a(b))};this.vg(l,l);this.vg(l,l)};A.lP=Bh; '
  );
