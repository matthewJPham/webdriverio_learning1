
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get lblPrefabSCGenerated () { return $('.prefab-scorecard-generated'); }
    public get lblPrefabSCDate () { return $('#generatedDate'); }
    public get menuUser () { return $('#m_header_topbar'); }
    public get lblUserName () { return $('div[class="m-card-user__details"]'); }

}

export default new DashboardPage();
