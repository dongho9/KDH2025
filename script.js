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
const mySplitText = split.chars; // 문자 배열
const mySplitText02 = split02.chars; // 문자 배열
const mySplitText03 = split03.chars; // 문자 배열
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

// gsap.to("main", {
//   background: "#111",
//   color: "#fff",
//   ease: "none", // scrub 시 꼭 필요
//   scrollTrigger: {
//     trigger: ".con02",
//     start: "-300px center",
//     end: "bottom center",
//     scrub: true,
//   },
// });

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

// gsap.to(".con02 > div", {
//   duration: 0.6,
//   width: "100%",
//   ease: "power4.out",
//   scrollTrigger: {
//     trigger: ".con02",
//     start: "-5% top", // .con02가 뷰포트 80% 지점에 닿을 때 실행
//     end: "-5% top", // .con02가 뷰포트 80% 지점에 닿을 때 실행
//     markers: true, // 디버깅용, 완료 후 제거 가능
//   },
// });

// gsap.to(".con02 div p", {
//   duration: 0.8,
//   opacity: 1,
//   delay: 0.3,
//   scrollTrigger: {
//     trigger: ".con02",
//     start: "-5% top", // .con02가 뷰포트 80% 지점에 닿을 때 실행
//     end: "-5% top", // .con02가 뷰포트 80% 지점에 닿을 때 실행
//     markers: true, // 디버깅용, 완료 후 제거 가능
//   },
// });

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
parallax[1].innerHTML = `
  <img
    class="thumbnail"
    src="https://v6.usestate.org/images/home/select-image01.webp"
    alt="clone01"
  />
  <div class="cloneText">
    <p>HLL 중앙</p>
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
