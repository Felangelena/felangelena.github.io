 $(document).ready(function () {
            var timeInterval, tabCount = 0, currnetIndex = 1;
            tabCount = $('ul#tabs').find('li a').length;
            var tabContentObj = $('.tabContent');
            changeTabIndex();
            timeInterval = setInterval(function () { changeTabIndex(); }, 4 * 1000);

            function changeTabIndex() {
                if (currnetIndex > tabCount) {
                    currnetIndex = 1;
                }
                tabContentObj.hide();
                $('ul#tabs').find('li.selected').removeClass('selected');
                var currentAncorObj = $('ul#tabs').find('li a').eq(currnetIndex - 1);
                currentAncorObj.parent().addClass('selected');
                $(currentAncorObj.attr('href')).show();
                currnetIndex++;
            };

            $('#tabs li').mouseenter(function () {
                clearInterval(timeInterval);
            }).mouseleave(function () {
                timeInterval = setInterval(function () { changeTabIndex(); }, 4 * 1000);
            });

            $('#tabs li a').click(function () {
                tabContentObj.hide();
                $('ul#tabs').find('li.selected').removeClass('selected');
                var currentAncorObj = $(this);
                currnetIndex = $('ul#tabs').find('li a').index($(this)) + 1;
                currentAncorObj.parent().addClass('selected');
                $(currentAncorObj.attr('href')).show();
                currnetIndex++;
            });
        
            var timeInterval2, tabCount2 = 0, currnetIndex2 = 1;
            tabCount2 = $('ul#tabs2').find('li a').length;
            var tabContentObj2 = $('.tabContent2');
            changeTabIndex2();
            timeInterval2 = setInterval(function () { changeTabIndex2(); }, 4 * 1000);

            function changeTabIndex2() {
                if (currnetIndex2 > tabCount2) {
                    currnetIndex2 = 1;
                }
                tabContentObj2.hide();
                $('ul#tabs2').find('li.selected').removeClass('selected');
                var currentAncorObj2 = $('ul#tabs2').find('li a').eq(currnetIndex2 - 1);
                currentAncorObj2.parent().addClass('selected');
                $(currentAncorObj2.attr('href')).show();
                currnetIndex2++;
            };

            $('#tabs2 li').mouseenter(function () {
                clearInterval(timeInterval2);
            }).mouseleave(function () {
                timeInterval2 = setInterval(function () { changeTabIndex2(); }, 4 * 1000);
            });

            $('#tabs2 li a').click(function () {
            tabContentObj2.hide();
            $('ul#tabs2').find('li.selected').removeClass('selected');
            var currentAncorObj2 = $(this);
            currnetIndex2 = $('ul#tabs2').find('li a').index($(this)) + 1;
            currentAncorObj2.parent().addClass('selected');
            $(currentAncorObj2.attr('href')).show();
            currnetIndex2++;
            });

 });