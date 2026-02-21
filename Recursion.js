let a = 10;
function fun(a) {
  if (a == 0) {
    return;
  }
  console.log(a);
  a = a - 1;
  fun(a);
}
fun(a);
