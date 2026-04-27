export function func_generate_password(my_form_dict, my_calculated_number)
{
    const my_multiple_dict = {
        'π': Math.PI,
        'e': Math.E,
        'Φ': (1 + Math.sqrt(5)) / 2
    }
    const my_multiple = my_multiple_dict[my_form_dict.my_select];

    const my_calculation = Math.round((my_calculated_number + my_form_dict.my_number) * my_multiple * 100) / 100;
    const my_password = `${my_calculation}${my_form_dict.my_text}`

    return [my_calculation, my_password];
}

export function func_generate_html(my_form_dict)
{
    return `
        <tr><td>Number</td><td>${my_form_dict.my_number}</td></tr>
        <tr><td>Text</td><td>${my_form_dict.my_text}</td></tr>
        <tr><td>Checkbox</td><td>${my_form_dict.my_checkbox}</td></tr>
        <tr><td>DateTime</td><td>${my_form_dict.my_datetime}</td></tr>
        <tr><td>Radio</td><td>${my_form_dict.my_radio}</td></tr>
        <tr><td>Dropdown</td><td>${my_form_dict.my_select}</td></tr>
        <tr><td>Password</td><td>${my_form_dict.my_password}</td></tr>
    `;
}