package com.example.demo.security;
import com.example.demo.User.UserRepo;
import com.example.demo.filter.CustomAuthenticationFilter;
import com.example.demo.filter.CustomAuthorizationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsService userDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepo userRepo;
    public SecurityConfig(UserDetailsService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder, UserRepo userRepo) {
        this.userDetailsService = userDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;

        this.userRepo = userRepo;
    }


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean(), userRepo);
        customAuthenticationFilter.setFilterProcessesUrl("/login");
        http.csrf().disable();
        http.csrf().disable().cors();
        http.cors().configurationSource(request -> {
            var cors = new CorsConfiguration();
            cors.setAllowedOrigins(List.of("*"));
            cors.setAllowedMethods(List.of("GET","POST", "PUT", "DELETE", "OPTIONS"));
            cors.setAllowedHeaders(List.of("*"));
            return cors;});
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        // Define the authorization patterns below
//        http.authorizeRequests().anyRequest().permitAll();
        // driver  authorizeRequests
//        http.authorizeRequests().antMatchers( HttpMethod.POST,"/login").permitAll();
        http.authorizeRequests().antMatchers( HttpMethod.POST,"/users").permitAll();
        http.authorizeRequests().antMatchers( HttpMethod.POST,"/driver").hasAuthority("school");
        http.authorizeRequests().antMatchers( HttpMethod.POST,"/driver/add_student").hasAuthority("school");
        http.authorizeRequests().antMatchers( HttpMethod.GET,"/driver").hasAuthority("school");
        http.authorizeRequests().antMatchers( HttpMethod.GET,"/driver/{id}").hasAuthority("driver");
        http.authorizeRequests().antMatchers( HttpMethod.DELETE,"/driver/{id}").hasAuthority("school");
        http.authorizeRequests().antMatchers( HttpMethod.PUT,"/driver/{id}").hasAuthority("driver");
        http.authorizeRequests().antMatchers( HttpMethod.GET,"/student/availableAm").hasAnyAuthority("driver","school");
        http.authorizeRequests().antMatchers( HttpMethod.GET,"/student/availablePm").hasAnyAuthority("driver","school");
        // student  authorizeRequests
        http.authorizeRequests().antMatchers( HttpMethod.POST,"/student").hasAuthority("school");
        http.authorizeRequests().antMatchers( HttpMethod.GET,"/student").hasAuthority("school");
        http.authorizeRequests().antMatchers( HttpMethod.GET,"/student/{id}").hasAnyAuthority("student","school");
        http.authorizeRequests().antMatchers( HttpMethod.DELETE,"/student/{id}").hasAuthority("school");
        http.authorizeRequests().antMatchers( HttpMethod.PUT,"/student/{id}").hasAuthority("student");
        // School
        http.authorizeRequests().antMatchers( HttpMethod.POST,"/school").hasAuthority("school");
        http.authorizeRequests().antMatchers( HttpMethod.GET,"/school").hasAuthority("school");
        http.authorizeRequests().antMatchers( HttpMethod.GET,"/users").hasAuthority("school");
//        http.authorizeRequests().anyRequest().authenticated();
        http.addFilter(customAuthenticationFilter);
        // test wakatime
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }

}
