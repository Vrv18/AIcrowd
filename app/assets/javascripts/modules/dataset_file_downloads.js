// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  $('.expiring-url').on('click', function (e) {
    var self = this;
    var dataset_file_id = $(this).data('dataset-file-id');
    $.ajax({
      url: '/dataset_files/' + dataset_file_id + '/dataset_file_downloads',
      type: 'POST',
      complete: function() { console.log('file download logged')},
      error: function() { console.log('file download errored ' + status)}
    })
  });
});
