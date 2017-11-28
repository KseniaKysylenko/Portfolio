/**
 * Created by Ksenya on 17.11.2017.
 */

$(document).ready(function(){

    function castParallax() {

        //var opThresh = 350;
        //var opFactor = 750;

        window.addEventListener("scroll", function(event){
            event.preventDefault();
            var top = this.pageYOffset;

            var layers = document.getElementsByClassName("parallax");
            var layer, speed;
            for (var i = 0; i < layers.length; i++) {
                layer = layers[i];
                speed = layer.getAttribute('data-speed');
                var yPos = -(top * speed / 100);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

            }
        });
    }

    castParallax();

    // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight()+15,
    // All list items
        menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });

});
