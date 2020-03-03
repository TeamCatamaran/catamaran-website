import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import JournalPagePreview from './preview-templates/JournalPagePreview'
import JournalPostPreview from './preview-templates/JournalPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import NetworkPagePreview from './preview-templates/NetworkPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('journal', JournalPagePreview)
CMS.registerPreviewTemplate('journal-post', JournalPostPreview)
CMS.registerPreviewTemplate('network', NetworkPagePreview)
