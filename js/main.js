console.log("loaded javascript")
const display_id = "output"
const over_flow_mess = "Over Flow"
let before_display = ""
let temp_num = 0

function get_number(insert_date) {
    if (insert_date === 10) {
        insert_date = String("00")
    } else {
        insert_date = String(insert_date)
    }
    before_display = String(document.getElementById(display_id).value)
    if (before_display === over_flow_mess) {
        document.getElementById(display_id).value = ""
    }
    let out = before_display + insert_date
    if (out.length > 12) {
        out = over_flow_mess
    } else if (out === "" || out === "0" || out === "00") {
        out = ""
    }
    document.getElementById(display_id).value = out
}

function del_num() {
    let before = String(document.getElementById(display_id).value)
    let current = before.slice(0, -1)
    console.log(current)
    document.getElementById(display_id).value = current
}

function set_operator() {
    const current_num = Number(document.getElementById(display_id).value)
    temp_num += current_num
    document.getElementById(display_id).value = ""
}

function get_ans() {
    if (Number(document.getElementById(display_id).value) === 9876543210 && temp_num === 0) {
        change_font()
        document.getElementById(display_id).value = ""
    } else {
        temp_num += Number(document.getElementById(display_id).value)
        console.log(temp_num)
        let temp_str = String(temp_num)
        if (temp_str.length > 12) {
            document.getElementById(display_id).value = over_flow_mess
        } else {
            document.getElementById(display_id).value = String(temp_num)
        }
    }
}

function clear_date() {
    temp_num = 0
    document.getElementById(display_id).value = ""
    if (document.getElementById(display_id).classList.contains('wf-hannari') === true) document.getElementById(display_id).classList.remove('wf-hannari')
}

function change_font() {
    if (document.getElementById(display_id).classList.contains('wf-hannari') === true) {
        document.getElementById(display_id).classList.remove('wf-hannari')
    } else {
        document.getElementById(display_id).classList.add('wf-hannari')
    }
}