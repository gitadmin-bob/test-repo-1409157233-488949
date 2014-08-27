gitadmin.listFilesIn('', function(files) {
  document.body.innerHTML = JSON.stringify(files);
})
