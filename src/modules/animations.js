export function func_animation_reset(my_icon)
{
    const my_keyframes = [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ];

    const my_options = {
        duration: 500,
        easing: 'ease-in-out'
    };

    my_icon.animate(my_keyframes, my_options);
}

export function func_result_svg(my_calculated_value, my_result_svg)
{
    if (my_calculated_value > 0 && my_calculated_value < 10)
    {
        my_result_svg.style.fill = 'red';
        my_result_svg.style.transform = 'rotate(180deg)';
    }
    else if (my_calculated_value > 100)
    {
        my_result_svg.style.fill = 'green';
        my_result_svg.style.transform = '';
    }
    else
    {
        my_result_svg.style.fill = 'none';
        my_result_svg.style.transform = '';
    }
}