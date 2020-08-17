const quote_url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
const color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const update = () => {
    let random_quote = Math.floor(Math.random() * 102)
    let random_color = Math.floor(Math.random() * color.length)
    $.get(quote_url, (data, status) => {
        let json = $.parseJSON(data)
        $("#quote-text p").html(json.quotes[random_quote].quote)
        $("#quote-author span").html(json.quotes[random_quote].author)
        $("#quote-text").css("color", color[random_color])
        $("#quote-author").css("color", color[random_color])
        $("#wrapper").animate({ backgroundColor: color[random_color] }, 500)
        $("a").animate({ backgroundColor: color[random_color] }, 500)
    })

}

const fadeOut = () => {
    $(".opacity").animate({ opacity: '0' }, 500, () => {
        $(".opacity").animate({ opacity: '1' })
        update()
    })

}

$(document).ready(() => {
    update()
})

$("#quote-new").click(() => {
    fadeOut()
})

$("#quote-share a:nth-child(1)").click(() => {
    $("#quote-share a:nth-child(1)").attr("href", "https://twitter.com/intent/tweet?text="+$("#quote-text p").text())
})

$("#quote-share a:nth-child(2)").click(() => {
    $("#quote-share a:nth-child(2)").attr("href", "http://service.weibo.com/share/share.php?title=" + $("#quote-text p").text())
})