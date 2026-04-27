// npm run dev
// npm run build
// npm run preview
// npm run deploy
// cd C:\Users\OliverAherne\WebstormProjects\vanilla\dist
// mapps code:push --client-side -i 14215247

import {func_animation_reset, func_result_svg} from './modules/animations.js';
import {func_validate_field} from './modules/validation.js';
import {func_generate_password, func_generate_html} from './modules/functions.js';

const my_required_fields = ['my_number', 'my_text', 'my_datetime', 'my_radio', 'my_select'];
let my_form_dict = {my_checkbox: false};
let my_calculated_number = 0;

const my_form = document.getElementById('my_form');
const my_fields = my_form.querySelectorAll('[name]');
const my_reset_icon = document.getElementById('my_reset_icon');
const my_submit_button = document.getElementById('my_submit_button');
const my_result_table = document.getElementById('my_result_table');
const my_result_svg = document.getElementById('my_result_svg');

function func_field_change(my_event)
{
    const my_field = my_event.currentTarget;
    const my_validated_value = func_validate_field(my_field);

    if (my_validated_value !== null)
    {
        my_form_dict[my_field.name] = my_validated_value;
    }
    else
    {
        delete my_form_dict[my_field.name];
    }

    const my_form_complete_status = my_required_fields.every(my_required_field => my_form_dict[my_required_field]);
    my_result_table.innerHTML = '';
    my_submit_button.disabled = !my_form_complete_status;
}

function func_submit()
{
    [my_calculated_number, my_form_dict.my_password] = func_generate_password(my_form_dict, my_calculated_number);
    my_result_table.innerHTML = func_generate_html(my_form_dict, my_calculated_number);
    func_result_svg(my_calculated_number, my_result_svg);
}

function func_reset()
{
    func_animation_reset(my_reset_icon);
    my_form.reset();
    my_form.querySelectorAll('.class_error').forEach(my_element => {my_element.style.visibility = 'hidden';});
    my_form_dict = {my_checkbox: false};
    my_calculated_number = 0;
    my_result_table.innerHTML = ''
    func_result_svg(my_calculated_number, my_result_svg);
}

my_fields.forEach(my_field =>
{
    my_field.addEventListener('change', func_field_change);
});
my_submit_button.addEventListener('click', func_submit);
my_reset_icon.addEventListener('click', func_reset);