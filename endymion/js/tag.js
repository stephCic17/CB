
      function show_tag(id)
      {
        var i = 0;
        var search = this.tags.find( function(find_elem){
          return find_elem == id });
        console.log(search);
        if (!search)
        {
          this.tags.push(id);

          document.getElementById(id).classList.remove("tag-name-link");
          document.getElementById(id).classList.add("tag-name-link-active");
          var index = 0;
          while(this.articles[i])
          {
            var j = 0;
            while (tags[j])
            {
              var searchTag = this.tags.find( function(elem){
                return elem == this.articles[i].tag });
              console.log(searchTag);
              if (searchTag)
                index = 10;
              j++;
            }
            if (index == 0)
              document.getElementById(this.articles[i].id).style.display = "block";
            i++;
          }
        }
        else
        {
          while (this.tags.indexOf(id) !== -1) {
            this.tags.splice(this.tags.indexOf(id), 1);
          }
          document.getElementById(id).classList.remove("tag-name-link-active");
          document.getElementById(id).classList.add("tag-name-link");

        }
        console.log(this.tags);
      }