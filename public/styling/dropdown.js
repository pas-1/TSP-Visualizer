$('.dropdown-menu').on('click', 'a', function () {
    const text = $(this).html()
    const bulletpoint =
        `<span style="font-weight: 900; color: #ffffff">` + text + `</span>`
    $(this).closest('.dropdown').find('.dropdown-toggle').html(bulletpoint)
})
