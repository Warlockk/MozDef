import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';
import { _ } from 'meteor/underscore';
import { Blaze } from 'meteor/blaze';
import '/client/loading.html';
import '/client/greeting.html';
import '/client/greeting.js';
import '/imports/settings.js';
import '/imports/collections.js';
import '/imports/helpers.js';
import '/client/mozdef.js';
import '/imports/models.js';
import '/client/mozdef.html';
import '/client/layout.js';
import '/client/footer.html';
import '/client/router.js';
import '/client/about.html';
import '/client/alertdetails.html';
import '/client/alertdetails.js';
import '/client/alertssummary.html';
import '/client/alertsummary.js';
import '/client/alertTableItem.js'
import '/client/attackerdetails.html';
import '/client/attackerdetails.js';
import '/client/attackers.html';
import '/client/attackers.js';
import '/client/blockFQDN.html';
import '/client/blockFQDN.js';
import '/client/blockIP.html';
import '/client/blockIP.js';
import '/client/eventdetails.html';
import '/client/fqdnBlocklistTable.html';
import '/client/fqdnBlocklistTable.js';
import '/client/globe.html';
import '/client/globe.js';
import '/client/incidentAdd.html';
import '/client/incidentEdit.html';
import '/client/incidentsveris.html';
import '/client/incidentsveris.js';
import '/client/incidentTable.html';
import '/client/incidents.js';
import '/client/investigationAdd.html';
import '/client/investigationEdit.html';
import '/client/investigationTable.html';
import '/client/investigations.js';
import '/client/ipBlocklistTable.html';
import '/client/ipBlocklistTable.js';
import '/client/ipdshield.html';
import '/client/ipdshield.js';
import '/client/ipintel.html';
import '/client/ipintel.js';
import '/client/ipwhois.html';
import '/client/ipwhois.js';
import '/client/logincounts.html';
import '/client/logincounts.js';
import '/client/manageAlertsTable.html';
import '/client/manageAlertsTable.js';
import '/client/mozdefhealth.html';
import '/client/mozdefhealth.js';
import '/client/nameplate.html';
import '/client/nameplate.js';
import '/client/verisTags.html';
import '/client/preferences.html';
import '/client/preferences.js'
import '/client/watchItem.html';
import '/client/watchItem.js';
import '/client/watchlistTable.html';
import '/client/watchlistTable.js';
import '/public/css/dropdowns.css';