// // 下拉選單切換頁面
// function showPageFromSelect() {
//     const pageId = document.getElementById("page-select").value;
//     showPage(pageId); // 呼叫 showPage 函數顯示對應的區塊
// }

// // 顯示對應的頁面區塊
// function showPage(pageId) {
//     document.querySelectorAll("section").forEach(section => {
//         section.classList.add("hidden");
//     });

//     document.getElementById(pageId).classList.remove("hidden");

//     const page = document.getElementById(pageId);
//     page.classList.remove("hidden");

// }

// // 返回首頁
// function goHome() {
//     document.querySelectorAll("section").forEach(section => {
//         section.classList.add("hidden");
//     });

//     document.getElementById("home").classList.remove("hidden");
// }
 
// // 讓按鈕點擊後顯示文字
// document.querySelectorAll(".social-item a").forEach(button => {
//     button.addEventListener("click", function (event) {
//         event.preventDefault();

//         const parent = this.closest(".social-item");
//         const message = parent.querySelector(".message");

//         // 清除舊狀態
//         message.classList.remove("hide");
//         message.classList.add("active");

//         // 幾秒後關閉動畫
//         setTimeout(() => {
//             message.classList.remove("active");
//             message.classList.add("hide");
//         }, 5000);
//     });
// });




// // 滾動時觸發淡入動畫
// window.addEventListener('scroll', () => {
//     document.querySelectorAll('.fade-in').forEach(entry => {
//         const rect = entry.getBoundingClientRect();
//         if (rect.top < window.innerHeight - 100) {
//             entry.classList.add('show');
//         }
//     });
// });


// // 首頁動畫初始化
// window.addEventListener('DOMContentLoaded', () => {
//   const image = document.querySelector('.home-image');
//   const socialItems = document.querySelectorAll('.social-item');

//   image.style.opacity = '1';

//   socialItems.forEach((item, i) => {
//     item.style.opacity = '1';

//     // 加上提示動畫 class
//     item.classList.add('pulse-hint');
//   });
// });





// // 讓每次切換到教育頁時重新觸發動畫
// function showPage(pageId) {
//     document.querySelectorAll("section").forEach(section => {
//         section.classList.add("hidden");
//     });

//     const page = document.getElementById(pageId);
//     page.classList.remove("hidden");

//     if (pageId === "education") {
//         // 重置動畫（強制重跑動畫）
//         document.querySelectorAll("#education .edu-icon, #education .edu-text").forEach(el => {
//             el.style.animation = "none";
//             el.offsetHeight; // 強制重繪
//             if (el.classList.contains("edu-icon")) {
//                 el.style.animation = "slideInLeft 0.8s ease forwards";
//             } else {
//                 el.style.animation = "zoomInText 0.8s ease forwards";
//             }
//         });
//     }
// }



// // 顯示頁面時觸發研究區動畫
// function showPage(pageId) {
//     document.querySelectorAll("section").forEach(section => {
//         section.classList.add("hidden");
//     });

//     const page = document.getElementById(pageId);
//     page.classList.remove("hidden");

//     if (pageId === "research") {
//         // 重設並觸發圖片動畫
//         document.querySelectorAll("#research .research-img").forEach(img => {
//             img.style.animation = "none";
//             img.offsetHeight; // 重繪
//             img.style.animation = "slideUpRotate 0.8s ease forwards";
//         });

//         // 重設並觸發段落動畫
//         const paras = document.querySelectorAll("#research .research-text p");
//         paras[0].style.animation = "none";
//         paras[1].style.animation = "none";
//         paras[0].offsetHeight;
//         paras[1].offsetHeight;
//         paras[0].style.animation = "slideInLeftZoom 0.8s ease forwards";
//         paras[1].style.animation = "slideInRightZoom 0.8s ease forwards";
//     }
// }





// // 顯示頁面時觸發技能頁動畫
// function showPage(pageId) {
//     document.querySelectorAll("section").forEach(section => {
//         section.classList.add("hidden");
//     });

//     const page = document.getElementById(pageId);
//     page.classList.remove("hidden");

//     if (pageId === "skills") {
//         document.querySelectorAll("#skills .skill-circle").forEach(el => {
//             el.style.animation = "none";
//             el.offsetHeight; // 強制重繪
//             el.style.animation = "dropIn 0.8s ease forwards";
//         });
//     }
// }





// // 顯示頁面時觸發經歷動畫
// function showPage(pageId) {
//     document.querySelectorAll("section").forEach(section => {
//         section.classList.add("hidden");
//     });

//     const page = document.getElementById(pageId);
//     page.classList.remove("hidden");

//     if (pageId === "experience") {
//         document.querySelectorAll("#experience .experience-entry").forEach(entry => {
//             entry.style.animation = "none";
//             entry.offsetHeight; // 觸發重繪
//             entry.style.animation = "risePop 0.7s ease forwards";
//         });
//     }
// }



// // 顯示頁面時觸發證照動畫
// function showPage(pageId) {
//     document.querySelectorAll("section").forEach(section => {
//         section.classList.add("hidden");
//     });

//     const page = document.getElementById(pageId);
//     page.classList.remove("hidden");

//     if (pageId === "certification") {
//         document.querySelectorAll("#certification .cert-card").forEach(card => {
//             card.style.animation = "none";
//             card.offsetHeight; // 強制重繪
//             card.style.animation = "slideInCert 0.7s ease forwards";
//         });
//     }
// }



// // 顯示頁面時觸發成就動畫
// function showPage(pageId) {
//     document.querySelectorAll("section").forEach(section => {
//         section.classList.add("hidden");
//     });

//     const page = document.getElementById(pageId);
//     page.classList.remove("hidden");

//     if (pageId === "achievements") {
//         document.querySelectorAll("#achievements .achievement-icon-card").forEach((card) => {
//             card.style.animation = "none";
//             card.offsetHeight; // 重繪
//             card.style.animation = "dropInSwing 0.9s ease forwards";
//         });
//     }
// }




// // 顯示頁面時觸發語言能力動畫
// function showPage(pageId) {
//     document.querySelectorAll("section").forEach(section => {
//         section.classList.add("hidden");
//     });

//     const page = document.getElementById(pageId);
//     page.classList.remove("hidden");

//     if (pageId === "language") {
//         // 處理語言卡片掉落動畫
//         document.querySelectorAll("#language .lang-bar").forEach(card => {
//             card.style.animation = "none";
//             card.offsetHeight;
//             card.style.animation = "dropInCard 0.8s ease forwards";
//         });

//         // 動態填滿能力條
//         document.querySelectorAll("#language .fill").forEach(fill => {
//             const finalWidth = fill.style.width; // 取原來設定的寬度
//             fill.style.width = "0%"; // 重設為 0%
//             fill.style.animation = "none";
//             fill.offsetHeight; // 強制重繪
//             fill.style.setProperty("--target-width", finalWidth); // 自定義變數
//             fill.style.animation = "fillBar 1.2s ease forwards";
//         });
//     }
// }


// 下拉選單切換頁面
function showPageFromSelect() {
    const select = document.getElementById("page-select");
    const pageId = select.value;

    // 強制觸發，即使是選相同的項目
    showPage(pageId);

    // 清空選擇值，回到提示狀態
    select.selectedIndex = 0;
}

// 回到首頁
function goHome() {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById("home").classList.remove("hidden");
}

// 顯示對應的頁面並執行動畫
function showPage(pageId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });

    const page = document.getElementById(pageId);
    page.classList.remove("hidden");

    switch (pageId) {
        case "education":
            document.querySelectorAll("#education .edu-icon, #education .edu-text").forEach(el => {
                el.style.animation = "none";
                el.offsetHeight;
                el.style.animation = el.classList.contains("edu-icon")
                    ? "slideInLeft 0.8s ease forwards"
                    : "zoomInText 0.8s ease forwards";
            });
            break;

        case "research":
            document.querySelectorAll("#research .research-img").forEach(img => {
                img.style.animation = "none";
                img.offsetHeight;
                img.style.animation = "slideUpRotate 0.8s ease forwards";
            });
            const paras = document.querySelectorAll("#research .research-text p");
            paras.forEach((p, i) => {
                p.style.animation = "none";
                p.offsetHeight;
                p.style.animation = i === 0
                    ? "slideInLeftZoom 0.8s ease forwards"
                    : "slideInRightZoom 0.8s ease forwards";
            });
            break;

        case "skills":
            document.querySelectorAll("#skills .skill-circle").forEach(el => {
                el.style.animation = "none";
                el.offsetHeight;
                el.style.animation = "dropIn 0.8s ease forwards";
            });
            break;

        case "experience":
            document.querySelectorAll("#experience .experience-entry").forEach(entry => {
                entry.style.animation = "none";
                entry.offsetHeight;
                entry.style.animation = "risePop 0.7s ease forwards";
            });
            break;

        case "certification":
            document.querySelectorAll("#certification .cert-card").forEach(card => {
                card.style.animation = "none";
                card.offsetHeight;
                card.style.animation = "slideInCert 0.7s ease forwards";
            });
            break;

        case "achievements":
            document.querySelectorAll("#achievements .achievement-icon-card").forEach(card => {
                card.style.animation = "none";
                card.offsetHeight;
                card.style.animation = "dropInSwing 0.9s ease forwards";
            });
            break;

        case "language":
            document.querySelectorAll("#language .lang-bar").forEach(card => {
                card.style.animation = "none";
                card.offsetHeight;
                card.style.animation = "dropInCard 0.8s ease forwards";
            });

            document.querySelectorAll("#language .fill").forEach(fill => {
                const finalWidth = fill.style.width;
                fill.style.width = "0%";
                fill.style.animation = "none";
                fill.offsetHeight;
                fill.style.setProperty("--target-width", finalWidth);
                fill.style.animation = "fillBar 1.2s ease forwards";
            });
            break;
    }
}

// 社群按鈕點擊動畫
document.querySelectorAll(".social-item a").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const parent = this.closest(".social-item");
        const message = parent.querySelector(".message");

        message.classList.remove("hide");
        message.classList.add("active");

        setTimeout(() => {
            message.classList.remove("active");
            message.classList.add("hide");
        }, 5000);
    });
});

// 滾動時觸發淡入動畫
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(entry => {
        const rect = entry.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            entry.classList.add('show');
        }
    });
});

// 首頁動畫初始化
window.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.home-image');
    const socialItems = document.querySelectorAll('.social-item');

    image.style.opacity = '1';

    socialItems.forEach((item) => {
        item.style.opacity = '1';
        item.classList.add('pulse-hint');
    });
});
