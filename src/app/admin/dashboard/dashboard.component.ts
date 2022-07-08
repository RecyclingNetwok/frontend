import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { CollectorService } from 'src/app/services/collector.service';
import { CompanyService } from 'src/app/services/company.service';
import { HouseholdService } from 'src/app/services/household.service';
import { OrganizationService } from 'src/app/services/organization.service';
import { PostService } from 'src/app/services/post.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoggedIn = false;
  email!: string;
  username!: string;
  userType!: string;
  roles: string[] = [];
  posts: any[]=[];
  admins: any[]=[];
  collectors: any[]=[];
  companies: any[]=[];
  households: any[]=[];
  organizations: any[]=[];
  isAdmin: boolean = false;
  isColl: boolean = false;
  isHhd: boolean = false;
  isOrg: boolean = false;
  isComp: boolean = false;

  totalAdmins!: number;
  totalHhd!: number;
  totalPosts!: number;
  totalOrgs!: number;
  totalColls!: number;
  totalComp!: number;

  constructor(
    private tokenStorageService: TokenStorageService,
    private postService: PostService,
    private adminService: AdminService,
    private collectorService: CollectorService,
    private companyService: CompanyService,
    private householdService: HouseholdService,
    private organizationService: OrganizationService
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.email = user.email;
      this.username = user.username;
      this.userType = user.userType;
      this.isAdmin = !!this.roles.includes("Administrateur");
  
      this.adminService.getAdmins().subscribe((response:any)=>{
        this.admins = response;
        this.totalAdmins = this.admins.length;
        console.log(this.admins);
      });

      this.postService.getPosts().subscribe((response:any)=>{
        this.posts = response;
        this.totalPosts = this.posts.length;
        console.log(this.posts);
      });
  
      this.collectorService.getCollectors().subscribe((response:any)=>{
        this.collectors = response;
        this.totalColls = this.collectors.length;
        console.log(this.collectors, this.totalColls);
      });

      this.companyService.getCompanies().subscribe((response:any)=>{
        this.companies = response;
        this.totalComp = this.companies.length;
        console.log(this.companies, this.totalComp);
      });

      this.householdService.getHouseholds().subscribe((response:any)=>{
        this.households = response;
        this.totalHhd = this.households.length;
        console.log(this.households);
      }); 

      this.organizationService.getOrgs().subscribe((response:any)=>{
        this.organizations = response;
        this.totalOrgs = this.organizations.length;
        console.log(this.organizations, this.totalOrgs);
      });
    }
  }

}
