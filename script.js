const nav=document.getElementById('nav'),bar=document.getElementById('bar');let last=scrollY;
addEventListener('scroll',()=>{let y=scrollY;nav.classList.toggle('hide',y>last&&y>140);last=y;let m=document.documentElement.scrollHeight-innerHeight;bar.style.width=Math.min(100,Math.max(0,y/m*100))+'%'},{passive:true});
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.14});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.querySelectorAll('.btn,.topbtn').forEach(b=>{b.addEventListener('mousemove',e=>{let r=b.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;b.style.transform=`translate(${x*.08}px,${y*.10}px) translateY(-4px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
