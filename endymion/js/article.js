 function loading(id, tag, title)
    {
      var i = 0;
        while(tag[i])
        {
          tag[i] = tag[i].substring(57);
          tag[i] = tag[i].slice(0, -4);
          if (tag[i][0] == '>')
            tag[i] = tag[i].substring(1);
          i++;
        }
        var table = {'id': id, 'tag' :tag, 'tag_actif' : 0, 'title' : title };
        this.articles.push(table);
    }