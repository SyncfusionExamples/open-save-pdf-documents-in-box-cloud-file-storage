import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, 
         ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
// Replace the "localhost:44396" with the actual URL of your server
pdfviewer.serviceUrl = 'https://localhost:44396/pdfviewer';
//Replace `PDF_Succinctly.pdf` with the actual document name that you want to load from box folder
pdfviewer.documentPath = 'PDF_Succinctly.pdf';