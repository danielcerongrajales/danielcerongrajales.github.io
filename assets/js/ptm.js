  $('.row').each(function(indice, elemento) {
    
    tsParticles.loadJSON($(this).attr('id'), "assets/js/particles.json");
  });

  
  var jsons = {
    "Heading 1": ["App bars: bottom", "App bars: top", "Backdrop", "Banners", "Bottom navigation", "Buttons", "Buttons: floating action button", "Cards", "Checkboxes", "Chips", "Data tables", "Date pickers", "Dialogs", "Dividers", "Image lists", "Lists", "Menus", "Navigation drawer", "Navigation rail", "Progress indicators", "Radio buttons", "Sheets: bottom", "Sheets: side", "Sliders", "Snackbars", "Switches", "Tabs", "Text fields", "Time pickers", "Tooltips"],
    "Heading 2": ["App_bars_bottom", "App_bars_top", "Backdrop", "Banners", "Bottom_navigation", "Buttons", "Buttons_floating_action_button", "Cards", "Checkboxes", "Chips", "Data_tables", "Date_pickers", "Dialogs", "Dividers", "Image_lists", "Lists", "Menus", "Navigation_drawer", "Navigation_rail", "Progress_indicators", "Radio_buttons", "Sheets_bottom", "Sheets_side", "Sliders", "Snackbars", "Switches", "Tabs", "Text_fields", "Time_pickers", "Tooltips"],
  };
  var headings = Object.keys(jsons);
  jsonObj = [];
  for (i = 0, len = jsons[headings[0]].length; i < len; i++) {
    jsonObj.push([i+1,jsons[headings[0]][i],'<img class="img-thumbnail bg-trans border-trans" src="https://img.shields.io/github/tag/danielcerongrajales/'+jsons[headings[1]][i]+'.svg?style=for-the-badge&label=actual%20version&labelColor=2c44fe&color=00a7ff&logo=data:image/png;base64,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">'
      ,' <p class="my-2"><a data-toggle="lightbox" class="btn btn-primary group1" href="https://github.com/danielcerongrajales/'+jsons[headings[1]][i]+ '/blob/main/demo_small.gif?raw=true" title="'+jsons[headings[0]][i]+'">click to see preview</a></p>',
      ]);
  }




    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });