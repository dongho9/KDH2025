const cursorPointed = document.querySelector(".pointed");

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", moveCursor);

// const links = document.querySelectorAll("a");

// links.forEach((link) => {
//   link.addEventListener("mouseenter", () => {
//     cursorPointed.classList.add("active");
//   });
//   link.addEventListener("mouseleave", () => {
//     cursorPointed.classList.remove("active");
//   });
// });

// GSAP
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.4, // 스크롤 이동 애니메이션 지속시간 (기본값: 1.2)

  smooth: true, // 부드러운 스크롤 활성화
});

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.body.style.transform ? "transform" : "fixed",
});

lenis.on("scroll", ScrollTrigger.update);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const intro = document.querySelector(".introSection");

const con01 = document.querySelector(".con01");

const header = document.querySelector("header");
const main = document.querySelector("main");
const con02 = document.querySelector(".con02");
const sectionTitle = document.querySelector(".sectionTitle");
const con03 = document.querySelector(".con03");
const con04 = document.querySelector(".con04");
const con05 = document.querySelector(".con05");
const pinSection = document.querySelector(".pinSection");
const tl = gsap.timeline();

const split = new SplitText(".headLine01", { type: "chars" });
const split02 = new SplitText(".headLine02", { type: "chars" });
const split03 = new SplitText(".con02 h3", { type: "chars" });
const split04 = new SplitText("footer p", { type: "chars" });
const mySplitText = split.chars; // 문자 배열
const mySplitText02 = split02.chars; // 문자 배열
const mySplitText03 = split03.chars; // 문자 배열
const mySplitText04 = split04.chars; // 문자 배열
// tl.to(con01, {
//   height: "600px",
//   duration: 1,
//   ease: "power2.inOut",
// });
tl.to(con01, {
  height: "100vh",
  duration: 1,
  ease: "power2.inOut",
});
tl.from(mySplitText, {
  opacity: 0,
  y: 100,
  skewY: 10,
  duration: 0.6,
  stagger: 0.1,
  ease: "power4.out",
});
tl.from(mySplitText02, {
  opacity: 0,
  y: 60,
  duration: 0.6,
  ease: "power4.out",
});

tl.call(() => {
  document.body.style.height = "auto";
  document.body.style.overflowY = "auto";
});

//콘텐츠
gsap.to(".con01", {
  filter: "brightness(0)", // 점점 어두워짐
  ease: "none", // scrub 시 꼭 필요
  scrollTrigger: {
    trigger: ".con02",
    start: "-300px center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to("main", {
  width: "100%",
  ease: "none", // scrub 시 꼭 필요
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    end: "+=200", // 500px 스크롤 구간
    scrub: true,
  },
});

gsap.to(".pinSection", {
  width: "100%",
  ease: "none", // scrub 시 꼭 필요
  scrollTrigger: {
    trigger: ".pinSection",
    pin: true,
    start: "top top",
    end: "+=2000",
    scrub: true,
  },
});

gsap.to(".con03", {
  width: "100%",
  top: "0",
  ease: "none", // scrub 시 꼭 필요
  scrollTrigger: {
    trigger: ".sectionTitle",
    start: "top top",
    scrub: true,
  },
});

gsap.to(".con04", {
  width: "100%",
  top: "0",
  ease: "none", // scrub 시 꼭 필요
  scrollTrigger: {
    trigger: ".con03",
    start: "top top",
    scrub: true,
  },
});

gsap.to(".con05", {
  width: "100%",
  top: "0",
  ease: "none", // scrub 시 꼭 필요
  scrollTrigger: {
    trigger: ".con04",
    start: "top top",
    scrub: true,
  },
});

gsap.to(".titleText p:first-child", {
  left: "0",
  ease: "none", // scrub 시 꼭 필요
  scrollTrigger: {
    trigger: ".con02",
    start: "top top",
    scrub: true,
  },
});

gsap.to(".titleText p:last-child", {
  right: "0",
  ease: "none", // scrub 시 꼭 필요
  scrollTrigger: {
    trigger: ".con02",
    start: "top top",
    scrub: true,
  },
});

gsap.from(".con02 h3", {
  opacity: 0,
  y: 60,
  skewY: 10,
  duration: 0.6,
  stagger: 0.1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".con02",
    start: "-5% top", // .con02가 뷰포트 80% 지점에 닿을 때 실행
    end: "-5% top", // .con02가 뷰포트 80% 지점에 닿을 때 실행
  },
});

const nav = document.querySelectorAll("header nav ul li a");
const home = document.querySelector("header nav ul li:first-child");
nav.forEach((item) => {
  item.addEventListener("click", (e) => {
    link = item.getAttribute("href");
    e.preventDefault();
    lenis.scrollTo(link);
  });
});
home.addEventListener("click", () => {
  lenis.scrollTo(0, 0);
});

gsap.to("main", {
  background: "#111",
  color: "#fff",
  ease: "none",
  scrollTrigger: {
    trigger: "#con04",
    end: "top top",
    scrub: true,
  },
});

gsap.to("#con04 .titleText p:first-child", {
  left: "0",
  ease: "none", // scrub 시 꼭 필요
  scrollTrigger: {
    trigger: ".gridTitle",
    end: "top top",
    scrub: true,
  },
});

gsap.to("#con04 .titleText p:last-child", {
  right: "0",
  ease: "none", // scrub 시 꼭 필요
  scrollTrigger: {
    trigger: ".gridTitle",
    end: "top top",
    scrub: true,
  },
});
// gsap.to("main", {
//   background: "#fff",
//   color: "#111",
//   ease: "none", // scrub 시 꼭 필요
//   scrollTrigger: {
//     trigger: "footer",
//     end: "top top",
//     scrub: true,
//   },
// });
gsap.from(mySplitText04, {
  y: 200,
  skewY: 10,
  duration: 0.6,
  stagger: 0.1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "footer",
    end: "top top",
  },
});

let windowWidth = window.innerWidth;

window.addEventListener("resize", () => {
  location.reload(); // 화면 너비 임계점 넘을 때만 새로고침
  document.body.style.overflow = "auto";
  window.scrollTo(0, 0);
});

const image01 = document.getElementsByClassName("thumbnail");
new simpleParallax(image01, {
  scale: 1.2,
  orientation: "up",
  delay: 1,
});
const image02 = document.getElementsByClassName("thumbnail2");
new simpleParallax(image02, {
  scale: 1.2,
  orientation: "down",
  delay: 1,
});
const image03 = document.getElementsByClassName("thumbnail3");
new simpleParallax(image03, {
  scale: 1.2,
  orientation: "down",
  delay: 1,
});

const parallax = document.querySelectorAll(".simpleParallax");

parallax[1].innerHTML = `<img class="thumbnail"
src="https://v6.usestate.org/images/home/select-image01.webp" alt=""/>
<div class="cloneText"> 
  <p>HLL</p>
</div>
`;

parallax[2].innerHTML = `<img class="thumbnail"
src="https://v6.usestate.org/images/home/select-image05.webp" alt=""/>
<div class="cloneText"> 
  <p>Republic Records</p>
</div>
`;

parallax[3].innerHTML = `<img class="thumbnail"
src="https://v6.usestate.org/images/home/select-image06.webp" alt=""/>
<div class="cloneText"> 
  <p>Musign</p>
</div>
`;

parallax[4].innerHTML = `<img class="thumbnail"
src="https://v6.usestate.org/images/home/select-image01.webp" alt=""/>
<div class="cloneText"> 
  <p>Spotify</p>
</div>
`;

parallax[5].innerHTML = `<img class="thumbnail"
src="https://v6.usestate.org/images/home/select-image04.webp" alt=""/>
<div class="cloneText"> 
  <p></p>
</div>
`;

parallax[1].addEventListener("click", () => {
  window.open("https://dongho9.github.io/HLL/", "_blank");
});
parallax[2].addEventListener("click", () => {
  window.open("https://dongho9.github.io/Republic-Records/", "_blank");
});
parallax[3].addEventListener("click", () => {
  window.open("https://dongho9.github.io/musign/", "_blank");
});
parallax[4].addEventListener("click", () => {
  window.open("https://dongho9.github.io/Spotify/", "_blank");
});
