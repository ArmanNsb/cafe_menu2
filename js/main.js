document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // 1. مدیریت صفحه استارتاپ (Splash Screen)
    // ============================================
    const splashScreen = document.getElementById('splash-screen');
    
    if (splashScreen) {
        // قفل کردن اسکرول بادی وقتی اسپلش بازه
        document.body.style.overflow = 'hidden';

        // زمان نمایش اسپلش اسکرین (مثلاً 2.5 ثانیه)
        setTimeout(() => {
            // اضافه کردن کلاس برای انیمیشن خروج
            splashScreen.classList.add('hidden');
            
            // آزاد کردن اسکرول صفحه
            document.body.style.overflow = 'auto';
            
            // (اختیاری) حذف کامل از DOM بعد از اتمام انیمیشن برای سبکی صفحه
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 1000); // این زمان باید بیشتر از transition توی CSS باشه

        }, 2500); // 2500 میلی‌ثانیه = 2.5 ثانیه صبر
    }


    // ============================================
    // 2. مدیریت منو و سایه‌ها (کدهای قبلی)
    // ============================================
    const categories = document.querySelectorAll('.menu-category');

    categories.forEach(category => {
        const header = category.querySelector('.category-header');
        const content = category.querySelector('.category-content');

        header.addEventListener('click', () => {
            
            const isOpen = category.classList.contains('active');

            // بستن بقیه آیتم‌ها
            categories.forEach(item => {
                if (item !== category) {
                    const itemContent = item.querySelector('.category-content');
                    item.classList.remove('shadow-visible');
                    item.style.overflow = 'hidden'; 
                    itemContent.style.overflow = 'hidden';
                    item.classList.remove('active');
                    itemContent.style.height = '0px';
                }
            });

            // مدیریت آیتم کلیک شده
            if (!isOpen) {
                // باز کردن
                category.classList.add('active');
                const contentHeight = content.scrollHeight;
                content.style.height = contentHeight + 'px';

                setTimeout(() => {
                    if (category.classList.contains('active')) {
                        category.style.overflow = 'visible';
                        content.style.overflow = 'visible';
                        requestAnimationFrame(() => {
                            category.classList.add('shadow-visible');
                        });
                    }
                }, 500); 

            } else {
                // بستن
                category.classList.remove('shadow-visible');
                category.style.overflow = 'hidden';
                content.style.overflow = 'hidden';
                category.classList.remove('active');
                content.style.height = '0px';
            }
        });
    });
});