$('.dropdown-menu').on('click', 'a', function () {
    const text = $(this).html()
    const htmlText = text + ' <span class="caret"></span>'
    $(this).closest('.dropdown').find('.dropdown-toggle').html(htmlText)
})
