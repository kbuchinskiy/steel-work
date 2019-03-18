let bar_element = document.querySelector('.js-bar');
let bar_column_values = [{
        name: 'СТАЛЬ 3',
        value: 156
    },
    {
        name: 'СТАЛЬ 45',
        value: 229
    },
    {
        name: '30ХГСА',
        value: 229
    },
    {
        name: '09ГС2',
        value: 337
    },
    {
        name: '110Г13Л',
        value: 500
    },
    {
        name: 'HARDOX',
        value: 600
    },
    {
        name: 'SWIP',
        value: 643
    }
]

const MAX_BAR_VALUE = bar_element.dataset.maxValue;

function CreateBar(path, arr) {
    this.element = path;
    this.columns = bar_column_values;

    this._render();
}

CreateBar.prototype._render = function () {
    let decor_arr = document.querySelectorAll('.bar__decor-item');

    decor_arr[0].dataset.value = MAX_BAR_VALUE * 1;
    decor_arr[1].dataset.value = MAX_BAR_VALUE * 0.75;
    decor_arr[2].dataset.value = MAX_BAR_VALUE * 0.5;
    decor_arr[3].dataset.value = MAX_BAR_VALUE * 0.25;

    let max_value = 0;
    let prev_value = 0;

    for (arr of this.columns) {
        let {
            name,
            value
        } = arr;

        if (value > max_value) {
            max_value = value;
            prev_value = value;
        } else {
            prev_value = value;
        }
    }

    this.element.querySelector('.bar__inner').innerHTML = this.columns.map(function (obj) {
        let {
            name,
            value
        } = obj;
        let data_max;
        (value == max_value) ? data_max = 'true': data_max = 'false';
        return `
		<div class="bar__column" style="height: 0" data-max="${ data_max }">
			<div class="bar__value">${value}</div>
			<div class="bar__inner"></div>
			<div class="bar__name">${name}</div>
		</div>
		`
    }).join(" ");
}

CreateBar.prototype._setHeight = function () {
    let heightValues = [];

    this.columns.map(function (obj) {
        let {
            name,
            value
        } = obj;
        heightValues.push(value);
    }).push();

    let columns = document.querySelectorAll('.bar__column');

    for (let i = 0, end = columns.length; i < end; i++) {
        columns[i].style.height = heightValues[i] / MAX_BAR_VALUE * 100 + '%';
    }
}

let bar = new CreateBar(
    bar_element,
    bar_column_values
);

window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (bar_element.offsetTop + bar_element.offsetHeight > scrolled + document.documentElement.clientHeight) {
        return;
    } else {
        bar._setHeight();
    }
}