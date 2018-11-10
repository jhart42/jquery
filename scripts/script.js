$(document).ready(() => {
  const $singerBlue = $('#singer_blue');
  const $signUp = $('#signup');
  const $wholeBand = $('#whole_band');
  const $applause = $('#applause');

  $singerBlue.on('click', () => {
    $singerBlue.hide();
  });

  $signUp.on('click', () => {
    $signUp.hide();
  });

  $wholeBand.on('click', () => {
    $wholeBand.hide();
  });

  $applause.on('click', () => {
    $applause.hide();
  });

  /*$('.btn btn-info').on('click', () => {
    $singer_blue.hide();
  })

/*  $('#singer_blue').on('mouseleave', () => {
    $('.singer_blue').hide();
  });
*/
});
