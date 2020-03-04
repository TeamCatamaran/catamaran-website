import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import ExperimentsPagePreview from './preview-templates/ExperimentsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import JournalPagePreview from './preview-templates/JournalPagePreview'
import JournalPostPreview from './preview-templates/JournalPostPreview'
import NetworkPagePreview from './preview-templates/NetworkPagePreview'
import StudioCofounderPagePreview from './preview-templates/StudioCofounderPagePreview'
import StudioStartupPagePreview from './preview-templates/StudioStartupPagePreview'
import StudioUpstartsPagePreview from './preview-templates/StudioUpstartsPagePreview'
import VenturesPagePreview from './preview-templates/VenturesPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('experiments', ExperimentsPagePreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('journal', JournalPagePreview)
CMS.registerPreviewTemplate('journal-post', JournalPostPreview)
CMS.registerPreviewTemplate('network', NetworkPagePreview)
CMS.registerPreviewTemplate('studio-cofounder', StudioCofounderPagePreview)
CMS.registerPreviewTemplate('studio-startup', StudioStartupPagePreview)
CMS.registerPreviewTemplate('studio-upstarts', StudioUpstartsPagePreview)
CMS.registerPreviewTemplate('ventures', VenturesPagePreview)
