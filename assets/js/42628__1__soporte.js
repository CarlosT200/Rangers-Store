function navegatorSupport() {
        var version = window.navigator.userAgent;
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        if (version.indexOf('MSIE ') > 0) {
            return true;
        }
        return false;
    }
    //modal navegador
    function modalNavegator(){
        var title='Cuidado tu navegador no es seguro';
        var msg ='Hemos detectado que tu navegador no está actualizado, por favor actualiza tu navegador o utiliza uno más nuevo';
        var modal = '<div class="modal fade" id="navigatorModal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">'+title+'</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body">'+msg+'</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Lo entiendo</button></div></div></div></div>';
        if(navegatorSupport()){
            try{
            $("body").append(modal)
            $("#navigatorModal").modal('show');
            }catch(ex){
                if(!document.getElementById( "navigatorModal" )){
                    alert(title+'\n\n'+msg)
                }
            }
            
        }
        
    }
    modalNavegator();