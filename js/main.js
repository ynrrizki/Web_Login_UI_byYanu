// theme
        let setTheme = document.querySelector('#theme');
        let setIcon = document.querySelector('#icon');
        let setButton = document.querySelector('.theme');
        setTheme.onclick = function () {
            document.body.classList.toggle('dark-theme');
            if (document.body.classList.contains('dark-theme')) {
                setIcon.src = "img/icons/sun.png";
            } else {
                setIcon.src = "img/icons/moon.png";
            }
        }

        // sidebar
        let menu = document.querySelector('#menu');
        let sidebar = document.querySelector('.sidebar');
        let itemText = document.querySelector('.item-text');
        let menuNav = document.querySelector('.nav-menu');
        menu.onclick = function () {
            sidebar.classList.toggle("active");
            menuNav.classList.toggle("active");
        }
        let itemA = document.querySelectorAll('.item-a');
        for (let i = 0; i < itemA.length; i++) {
            itemA[i].onclick = function () {
                let j = 0;
                while (j < itemA.length) {
                    itemA[j++].className = 'item-a';
                }
                itemA[i].className = 'item-a active';
            }
        }