import listen from 'aum-listen';

var current;

listen('cell', function (e) {
  current = e.detail;
});

export default function () {
  return current;
}

