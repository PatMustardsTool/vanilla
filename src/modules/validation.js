const my_validator_dict = {
    my_number: (my_field) =>
    {
        const my_number = Number(my_field.value);
        const my_status = my_number >= 1 && my_number <= 10;
        return my_status ? my_number : null;
    },

    my_text: (my_field) =>
    {
        const my_text = my_field.value;
        const my_status = /[A-Z]/.test(my_text) && /[a-z]/.test(my_text) && /[^a-zA-Z0-9]/.test(my_text);
        return my_status ? my_text : null;
    },

    my_checkbox: (my_field) =>
    {
        return my_field.checked;
    },

    my_datetime: (my_field) =>
    {
        const my_date_time = new Date(my_field.value).getTime();
        const my_end_of_day = new Date().setHours(23, 59, 59, 999);
        const my_four_weeks = 28 * 24 * 60 * 60 * 1000;
        const my_status = my_date_time >= (my_end_of_day - my_four_weeks) && my_date_time <= my_end_of_day;

        const my_formatted_date_time = new Intl.DateTimeFormat('en-GB', {
            weekday: 'short',   // ddd
            day: '2-digit',     // dd
            month: '2-digit',   // mm
            year: '2-digit',    // yy
            hour: '2-digit',    // hh
            minute: '2-digit',  // mm
            hour12: false
        }).format(my_date_time);

        return my_status ? my_formatted_date_time : null;
    }
};

export function func_validate_field(my_field)
{
    const my_validator_function = my_validator_dict[my_field.name];
    if (!my_validator_function) return my_field.value;

    const my_validated_value = my_validator_function(my_field);

    const my_error = my_field.closest('.class_input').querySelector('.class_error');

    my_error.style.visibility = my_validated_value === null ? 'visible' : 'hidden';

    return my_validated_value;
}