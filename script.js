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

const mySplitText = document.querySelector(".headLine01");

tl.to(con01, {
  height: "600px",
  duration: 1,
  ease: "power2.inOut",
});
tl.to(con01, {
  width: "100%",
  height: "100vh",
  duration: 1,
  ease: "power2.inOut",
});
tl.from(mySplitText, {
  opacity: 0,
  y: 100,
  duration: 0.25,
  ease: Power1.easeIn,
});
tl.to(header, {
  top: "5%",
  duration: 1,
  ease: "power2.inOut",
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
  background: "#111",
  color: "#fff",
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
    end: "+=3000",
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

const nav = document.querySelectorAll("header nav ul li a");
const home = document.querySelector("header nav ul li:first-child");
console.log(home);
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

ScrollTrigger.create({
  trigger: "#con02",
  start: "top top",
  end: "bottom top",
  toggleClass: {
    targets: ".header nav ul li:nth-child(2)",
    className: "active",
  },
  // markers: true, // 디버깅용
});
var image = document.getElementsByClassName("thumbnail");
new simpleParallax(image, {
  scale: 1.2,
  orientation: "up",
  delay: 1,
});
var image = document.getElementsByClassName("thumbnail2");
new simpleParallax(image, {
  scale: 1.2,
  orientation: "down",
  delay: 1,
});

const parallax = document.querySelectorAll(".simpleParallax");
console.log(parallax);
parallax[0].innerHTML = `
  <img
    class="thumbnail"
    src="https://v6.usestate.org/images/home/select-image01.webp"
    alt="clone01"
  />
  <div class="cloneText">
    <p>HLL 중앙</p>
  </div>
`;
